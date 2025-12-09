import { Suspense } from "react";
import { ProviderList } from "@/components/ProviderList";

async function getProviders(category: string) {
      const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/providers/list?category=${category}`
      );
      return res.json();
}

export default async function ProvidersPage({ searchParams }: any) {
      const params = await searchParams;
      const category = params?.category || "";
      const providers = await getProviders(category);

      return (
            <div className="min-h-screen bg-background p-6 md:p-10">
                  <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                                    {category ? `${category} Services` : "All Providers"}
                              </h1>
                              <p className="text-muted-foreground mt-2 md:mt-0">
                                    Found {providers.length} professional{providers.length !== 1 && "s"}
                              </p>
                        </div>

                        <Suspense fallback={<div className="text-center">Loading providers...</div>}>
                              <ProviderList providers={providers} />
                        </Suspense>
                  </div>
            </div>
      );
}
