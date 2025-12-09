import Link from "next/link";

interface Provider {
      id: string;
      name: string;
      category: string;
      experience?: number;
      price?: number;
      photoUrl?: string;
}

interface ProviderCardProps {
      provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
      return (
            <Link
                  href={`/providers/${provider.id}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
                  <div className="relative h-60 overflow-hidden">
                        <img
                              src={provider.photoUrl}
                              alt={provider.name}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {provider.name}
                              </h2>
                              <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                                    {provider.category}
                              </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                              {provider.experience || 0} years experience
                        </p>

                        <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                              <p className="text-lg font-bold text-primary">₹{provider.price}</p>
                              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                    View Profile →
                              </span>
                        </div>
                  </div>
            </Link>
      );
}
