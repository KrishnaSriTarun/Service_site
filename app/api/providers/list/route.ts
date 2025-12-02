import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
      try {
            const { searchParams } = new URL(req.url);
            const category = searchParams.get("category") || undefined;

            const providers = await prisma.provider.findMany({
                  where: category ? { category } : {},
                  orderBy: { createdAt: "desc" },
            });

            return Response.json(providers);
      } catch (err) {
            console.error(err);
            return Response.json({ error: "Failed to load providers" }, { status: 500 });
      }
}
