import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

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
