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
    const { userId, email, fullName } = req.body
    if (!userId || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const result = await pool.query(`
      INSERT INTO "User" (id, email, "fullName", "passwordHash")
      VALUES ($1, $2, $3, 'supabase-managed')
      ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email, "fullName" = EXCLUDED."fullName"
      RETURNING id, email, "fullName", "discordId", "onboardingComplete", "createdAt"
    `, [userId, email, fullName || 'User'])

    return res.json({ success: true, user: result.rows[0] })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}