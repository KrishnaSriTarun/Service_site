
import { useUser } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
      const { user } = useUser();
      console.log('Checking Booking model...')
      try {
            const res = await prisma.booking.findMany({
                  where: { customerId: user?.id }
            })
            console.log('Success. Found:', res.length)
      } catch (e) {
            console.error('Error:', e)
      }
}

main()
