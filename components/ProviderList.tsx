import Link from "next/link";
import { ProviderCard } from "./ProviderCard";

interface Provider {
      id: string;
      name: string;
      category: string;
      experience?: number;
      price?: number;
      photoUrl?: string;
}

interface ProviderListProps {
      providers: Provider[];
}

export function ProviderList({ providers }: ProviderListProps) {
      if (providers.length === 0) {
            return (
                  <div className="col-span-full text-center py-20">
                        <p className="text-xl text-muted-foreground">
                              No providers found in this category.
                        </p>
                        <Link
                              href="/"
                              className="text-primary hover:underline mt-4 inline-block"
                        >
                              Go back home
                        </Link>
                  </div>
            );
      }

      return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {providers.map((p) => (
                        <ProviderCard key={p.id} provider={p} />
                  ))}
            </div>
      );
}
