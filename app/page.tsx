import { Suspense } from "react";
import { CategoryList } from "@/components/CategoryList";

type Category = {
  name: string;
  emoji: string;
  gradient: string;
};

const categories: Category[] = [
  // { name: "ALL", emoji: "📌", gradient: "from-gray-500 to-gray-700" },
  { name: "Electrician", emoji: "⚡", gradient: "from-yellow-400 to-orange-500" },
  { name: "Plumber", emoji: "🚰", gradient: "from-blue-400 to-cyan-500" },
  { name: "Carpenter", emoji: "🪵", gradient: "from-amber-600 to-yellow-700" },
  { name: "AC Repair", emoji: "❄️", gradient: "from-sky-400 to-blue-600" },
  { name: "Cleaning", emoji: "🧹", gradient: "from-emerald-400 to-green-600" },
  { name: "Painting", emoji: "🎨", gradient: "from-pink-400 to-rose-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Find the Best Services
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Connect with top-rated professionals for all your home service needs. Fast, reliable, and secure.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <Suspense fallback={<div className="text-center">Loading categories...</div>}>
          <CategoryList categories={categories} />
        </Suspense>
      </section>
    </div>
  );
}
