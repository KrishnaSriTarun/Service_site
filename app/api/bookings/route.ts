import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
      try {
            const body = await req.json();

            const booking = await prisma.booking.create({
                  data: {
                        customerId: body.customerId,
                        providerId: body.providerId,
                        address: body.address,
                        description: body.description,
                        price: Number(body.price),
                  },
            });

            return Response.json(booking);
      } catch (error) {
            console.log(error);
            return Response.json({ error: "Failed to create booking" }, { status: 500 });
      }
}
