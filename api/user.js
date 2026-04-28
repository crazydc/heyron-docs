import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const userId = req.query.id
    if (!userId) {
      return res.status(400).json({ error: 'User ID required' })
    }

    const result = await pool.query(
      'SELECT id, email, "fullName", "discordId", "avatarUrl", "onboardingComplete", "onboardingStep", "createdAt" FROM "User" WHERE id = $1',
      [userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    return res.json(result.rows[0])
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}