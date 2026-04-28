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

    // For demo, return sample tickets
    // In production, you'd query the database
    const sampleTickets = [
      {
        id: 'TKT-001',
        subject: 'Agent not responding to commands',
        category: 'connection',
        status: 'open',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'TKT-002',
        subject: 'Billing question about renewal',
        category: 'billing',
        status: 'closed',
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]

    return res.json(sampleTickets)
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: error.message })
  }
}