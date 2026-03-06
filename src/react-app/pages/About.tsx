import { BookOpen, Search, MapPin, Phone, Monitor } from "lucide-react";
import Layout from "../components/ui/Layout";

export default function About() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Recherche facile",
      description: "Trouvez rapidement un panneau par code, nom ou type.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Catégories complètes",
      description:
        "Explorez tous les panneaux par catégories claires et détaillées.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Images et localisation",
      description:
        "Consultez des images et des descriptions détaillées pour chaque panneau.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Responsive",
      description: "Interface moderne adaptée à mobile, tablette et desktop.",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "PWA",
      description:
        "Installez l’application et accédez aux panneaux hors-ligne.",
    },
  ];

  return (
    <Layout className="min-h-screen bg-background">
      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-10 pb-20">
        <h1 className="text-3xl font-bold text-foreground mb-6">
          À propos de SignalRoute
        </h1>

        <p className="text-foreground mb-4">
          SignalRoute est votre guide complet des panneaux routiers français.
          Notre application vous permet de consulter tous les panneaux par code,
          nom ou type, que vous soyez étudiant au code de la route, conducteur
          ou simplement curieux.
        </p>

        <p className="text-foreground mb-4">
          L'objectif de SignalRoute est de rendre l'apprentissage de la
          signalisation routière plus simple, rapide et accessible depuis
          n'importe quel appareil. Vous pouvez rechercher facilement les
          panneaux, explorer par catégories et consulter des descriptions
          détaillées avec images.
        </p>

        <p className="text-foreground mb-6">
          L'application est optimisée pour les mobiles, tablettes et desktop,
          avec un design moderne, intuitif et responsive, pour que vous puissiez
          naviguer facilement dans toutes les sections.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Fonctionnalités principales
        </h2>

        {/* Features Grid avec icônes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
