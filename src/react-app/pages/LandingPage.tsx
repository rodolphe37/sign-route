import { Link } from "react-router";
import { Search, Layers, Smartphone } from "lucide-react";
import Logo from "../../assets/logo.png";
import Layout from "../components/ui/Layout";

export default function LandingPage() {
  return (
    <Layout className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Apprenez et explorez la{" "}
            <span className="text-primary">
              signalisation routière française
            </span>
          </h1>
          <img
            src={Logo}
            alt="logo"
            className="max-w-58 max-h-58 md:max-w-60 md:max-h-60 lg:max-w-45 lg:max-h-45 object-contain p-6 pb-5 mx-auto"
          />
          <p className="text-lg text-muted-foreground mb-10">
            Consultez tous les panneaux officiels, recherchez par code, nom ou
            catégorie et maîtrisez la signalisation facilement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/categories"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Explorer les panneaux
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-card border border-border rounded-xl">
            <Search className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Recherche rapide</h3>
            <p className="text-sm text-muted-foreground">
              Trouvez instantanément un panneau grâce au code (B4, EB10...), au
              nom ou à son type.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl">
            <Layers className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Toutes les catégories</h3>
            <p className="text-sm text-muted-foreground">
              Explorez les panneaux de danger, obligation, interdiction,
              indication et bien plus.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl">
            <Smartphone className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Mobile et hors-ligne</h3>
            <p className="text-sm text-muted-foreground">
              Utilisez l'application sur votre téléphone et accédez aux panneaux
              même sans connexion.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Une base complète de panneaux
            </h2>

            <p className="text-muted-foreground mb-6">
              SignalRoute regroupe tous les panneaux de signalisation français
              avec leurs images, descriptions et catégories officielles.
            </p>

            <Link
              to="/categories"
              className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Commencer
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <Link
                to="/categories?search=danger"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">⚠️</span>
                <p className="mt-2 text-xs">Danger</p>
              </Link>

              <Link
                to="/categories?search=interdiction"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">⛔</span>
                <p className="mt-2 text-xs">Interdiction</p>
              </Link>

              <Link
                to="/categories?search=obligation"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">➡️</span>
                <p className="mt-2 text-xs">Obligation</p>
              </Link>

              <Link
                to="/categories?search=stationnement"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">🅿️</span>
                <p className="mt-2 text-xs">Stationnement</p>
              </Link>

              <Link
                to="/categories?search=information"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">ℹ️</span>
                <p className="mt-2 text-xs">Information</p>
              </Link>

              <Link
                to="/categories?search=localisation"
                className="p-4 bg-secondary rounded-xl"
              >
                <span className="text-4xl">📍</span>
                <p className="mt-2 text-xs">Localisation</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
