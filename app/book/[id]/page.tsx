import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import BookingForm from "./BookingForm";

export default async function BookPage({ params }: any) {
      const { id } = await params;
      const provider = await prisma.provider.findUnique({
            where: { id },
      });

      if (!provider) {
            return (
                  <div className="text-red-500 text-center mt-20">Provider not found</div>
            );
      }

      return (
            <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
                  <div className="max-w-lg mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow">
                        <h1 className="text-2xl font-bold dark:text-white">
                              Book {provider.name}
                        </h1>

                        <Suspense fallback={<div>Loading booking form...</div>}>
                              <BookingForm providerId={provider.id} price={provider.price!} />
                        </Suspense>
                  </div>
            </div>
      );
}
