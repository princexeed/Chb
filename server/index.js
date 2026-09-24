import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import mysql from 'mysql2/promise'
import crypto from 'crypto'
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
dotenv.config()

const razorpay = process.env.RAZORPAY_KEY_ID && !process.env.RAZORPAY_KEY_ID.includes('xxxx')
  ? new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
  : null

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 5000

// Middleware — allow Vite dev, Vercel and custom domain; comma-separated list in CORS_ORIGIN
const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) : null
app.use(cors({
  origin: allowedOrigins || true,
  credentials: true,
}))
app.use(express.json())

// Health check
app.get('/api/health', (_req, res) => res.json({ success: true, status: 'ok', time: new Date().toISOString() }))

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
}

let pool

// ─── Initialize Database & Tables on Startup ───
async function initDatabase() {
  // First connect without a database to ensure it exists
  const tempConn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '3306'),
  })

  const dbName = process.env.DB_NAME || 'chb'
  await tempConn.execute(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`)
  await tempConn.end()

  // Now connect to the actual database
  const { default: poolModule } = await import('./db.js')
  pool = poolModule

  // Create the contact_messages table if it doesn't exist
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      department VARCHAR(100) DEFAULT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_created_at (created_at DESC)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `)

  console.log('✅ Database & tables ready')
}

// ─── POST /api/contact — Save contact form submission ───
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, department, message } = req.body

    // Validation
    const errors = []
    if (!fullName || !fullName.trim()) errors.push('Full name is required.')
    if (!email || !email.trim()) errors.push('Email is required.')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.')
    if (!message || !message.trim()) errors.push('Message is required.')

    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errors.join(' ') })
    }

    // Insert the message
    const [result] = await pool.execute(
      'INSERT INTO contact_messages (full_name, email, phone, department, message) VALUES (?, ?, ?, ?, ?)',
      [fullName.trim(), email.trim(), phone?.trim() || null, department?.trim() || null, message.trim()]
    )

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. We will get back to you shortly.',
      id: result.insertId,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    })
  }
})

// ─── GET /api/contacts — Retrieve all messages (for admin use) ───
app.get('/api/contacts', async (_req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM contact_messages ORDER BY created_at DESC')
    res.json({ success: true, data: rows })
  } catch (error) {
    console.error('Fetch contacts error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch messages.' })
  }
})

// ─── Razorpay Donation — Create Order ───
app.post('/api/donate/create-order', async (req, res) => {
  try {
    const { amount, fullName, email, phone, countryCode } = req.body
    const num = Number(amount)
    if (!num || num < 1 || num > 1000000) {
      return res.status(400).json({ success: false, message: 'Invalid amount. Must be between ₹1 and ₹10,00,000.' })
    }
    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return res.status(400).json({ success: false, message: 'Name, email and phone are required.' })
    }

    // If Razorpay not configured (still test placeholder), return mock order for local dev
    if (!razorpay) {
      console.warn('⚠️  Razorpay keys not set — returning mock order. Set RAZORPAY_KEY_ID/SECRET in server/.env')
      return res.json({
        success: true,
        mock: true,
        orderId: `order_mock_${Date.now()}`,
        amount: Math.round(num * 100),
        currency: 'INR',
        key: 'rzp_test_mock',
      })
    }

    const order = await razorpay.orders.create({
      amount: Math.round(num * 100), // paise
      currency: 'INR',
      receipt: `don_${Date.now()}`,
      notes: { fullName: fullName.trim(), email: email.trim(), phone: `${countryCode || '+91'}${phone.trim()}` },
    })

    res.json({ success: true, orderId: order.id, amount: order.amount, currency: order.currency, key: process.env.RAZORPAY_KEY_ID })
  } catch (error) {
    console.error('Create order error:', error)
    res.status(500).json({ success: false, message: 'Failed to create payment order. Try again.' })
  }
})

// ─── Razorpay Donation — Verify Payment Signature ───
app.post('/api/donate/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, fullName, email, phone, countryCode, amount } = req.body
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Missing payment verification data.' })
    }

    // Mock flow — skip verification if keys not set
    if (!razorpay || !process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET.includes('xxxx')) {
      console.log('✅ Mock payment verified:', { fullName, email, phone, amount, razorpay_payment_id })
      return res.json({ success: true, message: 'Payment verified (mock). Thank you for your donation!' })
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`
    const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body).digest('hex')
    if (expected !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Payment verification failed. Signature mismatch.' })
    }

    // TODO: save donation to DB and send 80G receipt
    console.log('✅ Payment verified:', { razorpay_payment_id, razorpay_order_id, fullName, email, phone, amount })

    res.json({ success: true, message: 'Payment verified successfully. Thank you for donating to CHB!' })
  } catch (error) {
    console.error('Verify error:', error)
    res.status(500).json({ success: false, message: 'Verification failed. Contact support.' })
  }
})

// ─── SPA fallback (production only) ───
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

// ─── Start Server ───
initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ CHB Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Failed to initialize database:', err.message)
    console.log('\n📋 Make sure MySQL is running and the credentials in server/.env are correct.')
    console.log('   Then run:  cd server && node index.js\n')
    process.exit(1)
  })
