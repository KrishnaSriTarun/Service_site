import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ProviderDetailsPage({ params }: any) {
      let provider;
      const par = await params

      try {
            provider = await prisma.provider.findUnique({
                  where: { id: par.id },
            });
      } catch (err) {
            return (
                  <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
                        Invalid Provider ID
                  </div>
            );
      }

      if (!provider) {
            return (
                  <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
                        Provider not found
                  </div>
            );
      }

      return (
            <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
                  <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow">

                        <img
                              src={provider.photoUrl || ""}
                              className="w-full h-100 object-cover rounded-lg"
                              alt={provider.name}
                        />

                        <h1 className="text-3xl font-bold mt-4 dark:text-white">
                              {provider.name}
                        </h1>

                        <p className="text-zinc-500 dark:text-zinc-300 mt-1">
                              {provider.category} • {provider.experience ?? 0} yrs experience
                        </p>

                        <p className="text-blue-600 font-semibold text-xl mt-3">
                              ₹{provider.price}
                        </p>

                        <div className="mt-6">
                              <Link
                                    href={`/book/${provider.id}`}
                                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700"
                              >
                                    Book Now
                              </Link>
                        </div>
                  </div>
            </div>
      );
}
