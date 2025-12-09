import { CategoryCard } from "./CategoryCard";

interface Category {
      name: string;
      emoji: string;
      gradient: string;
}

interface CategoryListProps {
      categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
      return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <CategoryCard
                        name="ALL"
                        emoji="📌"
                        gradient="from-primary/5 to-transparent"
                        href="/providers"
                  />
                  {categories.map((cat) => (
                        <CategoryCard
                              key={cat.name}
                              name={cat.name}
                              emoji={cat.emoji}
                              gradient={cat.gradient}
                              href={`/providers?category=${encodeURIComponent(cat.name)}`}
                        />
                  ))}
            </div>
      );
}
