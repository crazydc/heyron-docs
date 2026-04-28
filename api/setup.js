import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Create tables if they don't exist
    const createTables = `
      CREATE TABLE IF NOT EXISTS "User" (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        "passwordHash" TEXT NOT NULL,
        "fullName" TEXT NOT NULL,
        "discordId" TEXT,
        "avatarUrl" TEXT,
        "onboardingStep" INTEGER DEFAULT 0,
        "onboardingComplete" BOOLEAN DEFAULT false,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS "Subscription" (
        id TEXT PRIMARY KEY,
        "userId" TEXT UNIQUE NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
        plan TEXT DEFAULT 'free',
        status TEXT DEFAULT 'active',
        "stripeCustomerId" TEXT,
        "activatedAt" TIMESTAMP,
        "expiresAt" TIMESTAMP,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS "Server" (
        id TEXT PRIMARY KEY,
        "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        "displayName" TEXT,
        status TEXT DEFAULT 'offline',
        region TEXT,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS "Payment" (
        id TEXT PRIMARY KEY,
        "userId" TEXT NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
        "subscriptionId" TEXT,
        amount INTEGER NOT NULL,
        currency TEXT DEFAULT 'gbp',
        status TEXT DEFAULT 'pending',
        "paymentDate" TIMESTAMP DEFAULT NOW(),
        "createdAt" TIMESTAMP DEFAULT NOW()
      );
    `
    
    await pool.query(createTables)
    
    return res.json({ success: true, message: 'Tables created successfully' })
  } catch (error) {
    console.error('Error setting up database:', error)
    return res.status(500).json({ error: 'Failed to setup database', details: error.message })
  }
}