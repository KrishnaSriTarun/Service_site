import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
      try {
            const body = await req.json();
            console.log("BODY RECEIVED →", body);

            const provider = await prisma.provider.create({
                  data: {
                        name: body.name,
                        category: body.category,
                        experience: Number(body.experience),
                        price: Number(body.price),
                        userId: body.userId,
                        photoUrl: body.photoUrl || "",
                  }
            });

            return Response.json(provider);
      } catch (error) {
            console.log(error);
            return Response.json({ error: "Failed to add provider" }, { status: 500 });
      }
}
