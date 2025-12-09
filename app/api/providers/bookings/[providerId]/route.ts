import { prisma } from "@/lib/prisma";

export async function GET(
      req: Request,
      { params }: { params: Promise<{ providerId: string }> }
) {
      try {
            const { providerId } = await params;

            const bookings = await prisma.booking.findMany({
                  where: { providerId },
                  include: {
                        customer: true,
                  },
                  orderBy: { createdAt: "desc" },
            });

            return Response.json(bookings);
      } catch (err) {
            console.error(err);
            return Response.json({ error: "Failed to load provider bookings" }, { status: 500 });
      }
}
