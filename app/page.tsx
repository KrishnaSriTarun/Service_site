// "use client";

type Category = {
  name: string;
  emoji: string;
};

const categories: Category[] = [
  // { name: "ALL", emoji: "📌" },
  { name: "Electrician", emoji: "⚡" },
  { name: "Plumber", emoji: "🚰" },
  { name: "Carpenter", emoji: "🪵" },
  { name: "AC Repair", emoji: "❄️" },
  { name: "Cleaning", emoji: "🧹" },
  { name: "Painting", emoji: "🎨" },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 py-10 dark:bg-black">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Choose a Service
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
        <a
            href={`/providers`}
            className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
          >
            <span className="text-4xl mb-2">📌</span>
            <p className="text-lg font-medium dark:text-white">ALL</p>
          </a>
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={`/providers?category=${encodeURIComponent(cat.name)}`}
            className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
          >
            <span className="text-4xl mb-2">{cat.emoji}</span>
            <p className="text-lg font-medium dark:text-white">{cat.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
