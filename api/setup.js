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
      CREATE TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        name TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    return res.json({ success: true, message: 'Table created' })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message, code: error.code })
  }
}