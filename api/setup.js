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
    // Add new columns if they don't exist
    await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "agentName" TEXT`)
    await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "useCases" TEXT`)

    return res.json({ success: true, message: 'Columns added' })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}