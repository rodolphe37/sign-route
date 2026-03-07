import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Theorie from "../../assets/signification_panneaux_de_signalisation-1024x724.webp";
import Layout from "./ui/Layout";

export default function SignsTheory() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint md de Tailwind
    };

    handleResize(); // check initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Layout>
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          {/* TITLE */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl font-bold">
              Comprendre les panneaux du code de la route
            </h1>

            <p className="text-muted-foreground">
              Les panneaux de signalisation routière jouent un rôle essentiel
              dans la sécurité et l’organisation de la circulation. Ils
              permettent d’informer les conducteurs des dangers, des
              obligations, des interdictions et des directions à suivre.
            </p>
          </header>

          {/* CATEGORIES */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Les différentes catégories de panneaux
            </h2>

            <p>
              Les panneaux de signalisation routière peuvent être regroupés en
              différentes catégories, en fonction de leur forme, de leur couleur
              et de leur signification.
            </p>

            <p>
              Les principales catégories comprennent les panneaux de danger, les
              panneaux de prescription (interdiction et obligation), les
              panneaux d’indication et les panneaux de direction.
            </p>

            <p>
              Comprendre ces différentes catégories permet aux conducteurs
              d’identifier rapidement les informations importantes sur la route
              et d’adopter une conduite plus sûre.
            </p>
          </section>

          {/* TABLE */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Reconnaître les panneaux rapidement
            </h2>

            <img
              onClick={() => setIsOpen(true)}
              src={Theorie}
              alt="panneaux"
              className="max-w-150 max-h-150 md:max-w-90 md:max-h-90 lg:max-w-120 lg:max-h-120 object-contain p-6 pb-5 mx-auto"
            />
          </section>

          {/* DANGER */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Les panneaux de danger</h2>

            <p>
              Les panneaux de danger sont reconnaissables par leur forme
              triangulaire et leur bordure rouge. Leur objectif est d’attirer
              immédiatement l’attention des conducteurs afin de les prévenir
              d’un danger potentiel sur la route.
            </p>

            <p>
              Chaque panneau comporte un symbole noir qui représente le type de
              danger rencontré : carrefour à sens giratoire, passage à niveau,
              chaussée glissante ou virage dangereux.
            </p>

            <p>
              En agglomération, ces panneaux sont généralement placés environ 50
              mètres avant le danger. Hors agglomération, ils sont installés
              environ 150 mètres avant.
            </p>

            <p>
              Cette distance permet aux conducteurs d’anticiper le danger et
              d’adapter leur vitesse ou leur trajectoire.
            </p>
          </section>

          {/* PRESCRIPTION */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Les panneaux de prescription (interdiction et obligation)
            </h2>

            <p>
              Les panneaux de prescription sont de forme ronde et indiquent les
              règles obligatoires à respecter sur la route.
            </p>

            <h3 className="font-semibold text-lg">
              Les panneaux d’interdiction
            </h3>

            <p>
              Les panneaux d’interdiction indiquent les actions qui sont
              interdites aux conducteurs. Ils possèdent généralement une bordure
              rouge et un fond blanc.
            </p>

            <p>
              Par exemple, un panneau d’interdiction de stationner signifie
              qu’il est interdit de garer son véhicule à cet endroit.
            </p>

            <h3 className="font-semibold text-lg">Les panneaux d’obligation</h3>

            <p>
              Les panneaux d’obligation imposent une action que le conducteur
              doit obligatoirement respecter. Ils sont reconnaissables à leur
              fond bleu.
            </p>

            <p>
              Par exemple, un panneau peut obliger les conducteurs à tourner à
              gauche ou à emprunter une voie spécifique.
            </p>

            <h3 className="font-semibold text-lg">Les panneaux de fin</h3>

            <p>
              Les panneaux de fin indiquent que l’interdiction ou l’obligation
              précédemment imposée n’est plus en vigueur. Ils sont souvent
              représentés par une ligne diagonale noire.
            </p>
          </section>

          {/* INDICATION */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Les panneaux d’indication
            </h2>

            <p>
              Les panneaux d’indication sont généralement de forme carrée et
              possèdent un fond bleu.
            </p>

            <p>
              Ils fournissent des informations utiles aux conducteurs comme la
              présence d’une station-service, d’une aire de repos, d’un parking
              ou d’un passage piéton.
            </p>

            <p>
              Ces panneaux permettent d’améliorer le confort et la sécurité de
              la conduite en indiquant les services disponibles le long de la
              route.
            </p>
          </section>

          {/* DIRECTION */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Les panneaux de direction
            </h2>

            <p>
              Les panneaux de direction permettent aux conducteurs de s’orienter
              et de choisir l’itinéraire à suivre.
            </p>

            <p>
              Ils indiquent les grandes villes, les autoroutes, les routes
              principales ou les destinations locales.
            </p>

            <p>
              Un code couleur permet de distinguer les différents types de
              directions :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Vert : grandes villes</li>
              <li>Bleu : autoroutes</li>
              <li>Blanc : directions locales</li>
            </ul>
          </section>

          {/* OTHER PANELS */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Autres types de panneaux</h2>

            <h3 className="font-semibold text-lg">
              Panneaux d’intersection et de priorité
            </h3>

            <p>
              Ces panneaux indiquent les règles de priorité aux intersections :
              priorité à droite, stop, cédez-le-passage ou sens giratoire.
            </p>

            <h3 className="font-semibold text-lg">Panneaux temporaires</h3>

            <p>
              Les panneaux temporaires sont de couleur jaune et signalent des
              situations provisoires comme des travaux ou des déviations.
            </p>

            <h3 className="font-semibold text-lg">Panneaux de localisation</h3>

            <p>
              Les panneaux de localisation indiquent les villes, les communes et
              certains lieux touristiques ou culturels.
            </p>

            <h3 className="font-semibold text-lg">Panonceaux</h3>

            <p>
              Les panonceaux sont de petits panneaux placés sous un panneau
              principal afin d’apporter des informations complémentaires comme
              une distance, une catégorie de véhicule ou une durée.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Importance des panneaux de signalisation
            </h2>

            <p>
              Les panneaux de signalisation routière sont indispensables pour
              organiser la circulation et prévenir les accidents.
            </p>

            <p>
              Ils permettent aux conducteurs de connaître les dangers, les
              règles à respecter et les directions à suivre.
            </p>

            <p>
              Comprendre et respecter ces panneaux contribue à améliorer la
              sécurité routière et à protéger tous les usagers de la route.
            </p>
          </section>
        </section>
      </Layout>

      {/* MODALE IMAGE */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* MODAL */}
          <div
            className="relative w-full max-w-6xl bg-card rounded-xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div
              className={`flex items-center justify-between ${isMobile ? "p-2" : "p-4"} border-b`}
            >
              <h3 className="font-semibold text-lg">
                Tableau des panneaux de signalisation
              </h3>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex items-center justify-center p-6 pb-8 bg-black/20">
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{ step: 0.2 }}
                doubleClick={{ step: 1 }}
              >
                {({ zoomIn, zoomOut }) => (
                  <div className="relative w-full">
                    {/* Boutons zoom cliquables */}
                    <div
                      className={`absolute w-10 top-2 ${isMobile ? "-right-6" : "right-2"} z-50 flex flex-col gap-2 bg-black/60 rounded-full p-2 backdrop-blur-sm`}
                    >
                      <button
                        onClick={() => zoomIn(0.2)}
                        className="p-1 text-white hover:text-gray-300"
                        aria-label="Zoomer"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => zoomOut(0.2)}
                        className="p-1 text-white hover:text-gray-300"
                        aria-label="Dézoomer"
                      >
                        <ZoomOut className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Info UX responsive */}
                    <div
                      className={`absolute ${isMobile ? "-bottom-6" : "-bottom-7"} w-[60%] left-1/2 transform -translate-x-1/2 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm text-center`}
                    >
                      Zoom : {isMobile ? "pincement" : "molette"}
                    </div>

                    <TransformComponent>
                      <img
                        src={Theorie}
                        alt="Tableau des panneaux"
                        className="max-h-[75vh] object-contain mx-auto"
                      />
                    </TransformComponent>
                  </div>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
