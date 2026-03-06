import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, ChevronRight, X } from "lucide-react";
import { signTypes } from "@/data/signTypes";
import { roadSigns } from "@/data/signs";
import SignCard from "@/react-app/components/SignCard";
import { useSearchParams } from "react-router";
import Layout from "../components/ui/Layout";

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSigns, setFilteredSigns] = useState(roadSigns);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearching(false);
      setFilteredSigns([]);
      return;
    }

    setIsSearching(true);
    const query = searchQuery.toLowerCase().trim();
    const results = roadSigns.filter(
      (sign) =>
        sign.code.toLowerCase().includes(query) ||
        sign.name.toLowerCase().includes(query) ||
        sign.type.toLowerCase().includes(query),
    );
    setFilteredSigns(results);
  }, [searchQuery]);

  useEffect(() => {
    const queryParam = searchParams.get("search");

    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  return (
    <Layout className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto ">
          {/* Search */}
          <div className="relative px-4 py-4">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher par code (B4, EB10), nom ou type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 pb-20">
        {isSearching ? (
          /* Search Results */
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Résultats de recherche
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredSigns.length} panneau
                {filteredSigns.length !== 1 ? "x" : ""} trouvé
                {filteredSigns.length !== 1 ? "s" : ""}
              </span>
            </div>

            {filteredSigns.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredSigns.map((sign) => (
                  <SignCard key={`${sign.code}-${sign.type}`} sign={sign} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Aucun panneau ne correspond à votre recherche
                </p>
              </div>
            )}
          </section>
        ) : (
          /* Categories */
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Catégories de panneaux
            </h2>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {signTypes.map((type) => {
                const count = roadSigns.filter(
                  (s) => s.type === type.id,
                ).length;
                return (
                  <Link
                    key={type.id}
                    to={`/category/${type.id}`}
                    className="group flex items-center w-full gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {type.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {type.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg">
                        {count}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
