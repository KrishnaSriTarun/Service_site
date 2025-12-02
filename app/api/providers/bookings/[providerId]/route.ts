import { prisma } from "@/lib/prisma";

export async function GET(
      req: Request,
      { params }: { params: { providerId: string } }
) {
      try {
            const providerId = params.providerId;

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
