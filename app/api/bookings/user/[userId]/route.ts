import { prisma } from "@/lib/prisma";

export async function GET(
      request: Request,
      { params }: { params: { userId: string } }
) {
      try {
            const bookings = await prisma.booking.findMany({
                  where: { customerId: params.userId },
                  include: {
                        provider: true,
                  },
                  orderBy: { createdAt: "desc" }
            });

            return Response.json(bookings);
      } catch (error) {
            console.error(error);
            return Response.json(
                  { error: "Failed to load bookings" },
                  { status: 500 }
            );
      }
}
