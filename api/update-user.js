import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const userId = req.query.id
    const { fullName, discordId, avatarUrl } = req.body

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' })
    }

    const updates = []
    const values = []
    let i = 1

    if (fullName !== undefined) { updates.push(`"fullName" = $${i++}`); values.push(fullName) }
    if (discordId !== undefined) { updates.push(`"discordId" = $${i++}`); values.push(discordId) }
    if (avatarUrl !== undefined) { updates.push(`"avatarUrl" = $${i++}`); values.push(avatarUrl) }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No fields to update' })
    }

    values.push(userId)

    const result = await pool.query(`
      UPDATE "User" SET ${updates.join(', ')} WHERE id = $${i}
      RETURNING id, email, "fullName", "discordId", "avatarUrl", "onboardingComplete", "createdAt"
    `, values)

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    return res.json(result.rows[0])
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}