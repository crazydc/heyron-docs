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

    // Upsert user
    const query = `
      INSERT INTO "User" (id, email, full_name, "passwordHash")
      VALUES ($1, $2, $3, 'supabase-managed')
      ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        full_name = EXCLUDED.full_name
      RETURNING id, email, "fullName", "discordId", "onboardingComplete", "createdAt"
    `
    
    const result = await pool.query(query, [userId, email, fullName || 'User'])

    return res.json({ success: true, user: result.rows[0] })
  } catch (error) {
    console.error('Error upserting user:', error)
    return res.status(500).json({ error: 'Failed to upsert user', details: error.message })
  }
}