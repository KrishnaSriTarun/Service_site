import Link from "next/link";

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
            <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
                  <h1 className="text-3xl font-bold mb-6 dark:text-white">
                        {category ? `${category} Services` : "All Providers"}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {providers.length === 0 && (
                              <p className="dark:text-white text-center text-lg">
                                    No providers found in this category.
                              </p>
                        )}

                        {providers.map((p: any) => (
                              <Link
                                    href={`/providers/${p.id}`}
                                    key={p.id}
                                    className="bg-white dark:bg-zinc-900 shadow rounded-xl p-4 hover:shadow-lg transition"
                              >
                                    <img
                                          src={p.photoUrl}
                                          alt={p.name}
                                          className="w-full h-60 object-cover rounded-lg"
                                    />
                                    <h2 className="text-xl font-semibold mt-3 dark:text-white">
                                          {p.name}
                                    </h2>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-300">
                                          {p.category} • {p.experience || 0} yrs exp
                                    </p>
                                    <p className="text-blue-600 font-semibold mt-1">
                                          ₹{p.price}
                                    </p>
                              </Link>
                        ))}
                  </div>
            </div>
      );
}
