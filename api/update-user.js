import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { userId } = req.query
    const { fullName, discordId, avatarUrl } = req.body

    console.log('Updating user:', userId)

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' })
    }

    const updateData = {}
    if (fullName !== undefined) updateData.fullName = fullName
    if (discordId !== undefined) updateData.discordId = discordId
    if (avatarUrl !== undefined) updateData.avatarUrl = avatarUrl

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        email: true,
        fullName: true,
        discordId: true,
        avatarUrl: true,
        onboardingComplete: true,
        createdAt: true
      }
    })

    console.log('User updated:', user.id)

    return res.json(user)
  } catch (error) {
    console.error('Error updating user:', error)
    return res.status(500).json({ error: 'Failed to update user', details: error.message })
  }
}