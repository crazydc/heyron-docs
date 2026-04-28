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
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "User" (
        id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, "passwordHash" TEXT NOT NULL,
        "fullName" TEXT NOT NULL, "discordId" TEXT, "avatarUrl" TEXT,
        "onboardingStep" INTEGER DEFAULT 0, "onboardingComplete" BOOLEAN DEFAULT false,
        "createdAt" TIMESTAMP DEFAULT NOW(), "updatedAt" TIMESTAMP DEFAULT NOW()
      )
    `)
    return res.json({ success: true, message: 'Database ready' })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}