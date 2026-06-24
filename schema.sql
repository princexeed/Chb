-- ========================================
-- CHB — Christian Hospital Bissumcuttack
-- Database Schema for Contact Form
-- ========================================
-- Run this script in SQLyog Community 64
-- Select the chb database or create it first
-- ========================================

-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS chb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Use the database
USE chb;

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) DEFAULT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Confirm table creation
SELECT '✅ contact_messages table is ready!' AS status;
DESCRIBE contact_messages;
