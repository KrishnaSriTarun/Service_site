import { prisma } from "@/lib/prisma";

export async function GET(
      request: Request,
      { params }: { params: Promise<{ userId: string }> }
) {
      const { userId } = await params;
      try {
            const bookings = await prisma.booking.findMany({
                  where: { customerId: userId },
                  include: {
                        provider: true,
                  },
                  orderBy: { createdAt: "desc" }
            });

            return Response.json(bookings);
      } catch (error) {
            console.error("API Error loading bookings:", error);
            return Response.json(
                  { error: "Failed to load bookings" },
                  { status: 500 }
            );
      }
}
