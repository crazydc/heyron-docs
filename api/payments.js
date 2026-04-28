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

    const result = await pool.query(`
      SELECT id, "userId", "subscriptionId", amount, currency, status, "paymentDate", "createdAt"
      FROM "Payment"
      WHERE "userId" = $1
      ORDER BY "paymentDate" DESC
    `, [userId])

    return res.json(result.rows)
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}