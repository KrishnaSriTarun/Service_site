import Link from "next/link";

interface CategoryCardProps {
  name: string;
  emoji: string;
  gradient: string;
  href: string;
}

export function CategoryCard({ name, emoji, gradient, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
      />
      <span className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </span>
      <p className="text-lg font-semibold text-foreground">{name}</p>
    </Link>
  );
}
