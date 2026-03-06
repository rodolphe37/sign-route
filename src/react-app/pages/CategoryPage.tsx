import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { signTypes } from "@/data/signTypes";
import { roadSigns } from "@/data/signs";
import SignCard from "@/react-app/components/SignCard";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = signTypes.find((t) => t.id === categoryId);
  const signs = roadSigns.filter((s) => s.type === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Catégorie non trouvée
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/categories"
              className="w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center text-xl shadow-lg`}
              >
                {category.icon}
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground tracking-tight">
                  {category.name}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {signs.length} panneau{signs.length !== 1 ? "x" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 pb-10">
        {/* Category description */}
        <div className="mb-6 p-4 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        {/* Signs grid */}
        {signs.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {signs.map((sign) => (
              <SignCard key={sign.code} sign={sign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-3xl">🚧</span>
            </div>
            <p className="text-muted-foreground">
              Aucun panneau dans cette catégorie pour le moment
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
