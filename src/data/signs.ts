import a1a from "../assets/panneaux-de-danger/a1a-panneau-de-danger-virage-a-droite.png";
import a1b from "../assets/panneaux-de-danger/a1b-panneau-de-danger-virage-a-gauche.png";
import a1c from "../assets/panneaux-de-danger/a1c-panneau-succession-de-virages-dont-le-1er-est-a-droite.png";
import a2a from "../assets/panneaux-de-danger/a2a-panneau-de-danger-dos-d-ane.png";
import a2b from "../assets/panneaux-de-danger/a2b-panneau-de-danger-ralentisseur-dos-d-ane.png";
import a3 from "../assets/panneaux-de-danger/a3-panneau-de-danger-chaussee-retrecie.png";
import a3a from "../assets/panneaux-de-danger/a3a-panneau-chaussee-retrecie-par-la-droite.png";
import a3b from "../assets/panneaux-de-danger/a3b-panneau-chaussee-retrecie-par-la-gauche.png";
import a4 from "../assets/panneaux-de-danger/a4-panneau-de-danger-chaussee-glissante.png";
import a6 from "../assets/panneaux-de-danger/a6-panneau-de-danger-pont-mobile.png";
import a7 from "../assets/panneaux-de-danger/a7-panneau-de-danger-passage-a-niveau-muni-de-barrieres.png";
import a8 from "../assets/panneaux-de-danger/a8-panneau-de-danger-passage-a-niveau-sans-barriere.png";
import a9 from "../assets/panneaux-de-danger/a9-panneau-traversee-de-voies-de-tramways.png";
import a13a from "../assets/panneaux-de-danger/a13a-panneau-de-danger-enfants.png";
import a13b from "../assets/panneaux-de-danger/a13b-panneau-de-danger-passage-pour-pietons.png";
import a14 from "../assets/panneaux-de-danger/a14-panneau-de-danger-point-d-exclamation.png";
import a15a1 from "../assets/panneaux-de-danger/a15a1-panneau-attention-passage-d-animaux-domestiques.png";
import a15a2 from "../assets/panneaux-de-danger/a15a2-panneau-de-danger-passage-d-animaux-domestiques.png";
import a15b from "../assets/panneaux-de-danger/a15b-panneau-de-danger-passage-d-animaux-sauvages.png";
import a15c from "../assets/panneaux-de-danger/a15c-panneau-de-danger-attention-chevaux.png";
import a16 from "../assets/panneaux-de-danger/a16-panneau-de-danger-descente-dangereuse.png";
import a17 from "../assets/panneaux-de-danger/a17-panneau-de-danger-feux-tricolores.png";
import a18 from "../assets/panneaux-de-danger/a18-panneau-de-danger-circulation-dans-les-2-sens.png";
import a19 from "../assets/panneaux-de-danger/a19-panneau-risque-de-chute-de-pierres.png";
import a20 from "../assets/panneaux-de-danger/a20-panneau-de-danger-debouche-sur-un-quai-ou-une-berge.png";
import a21 from "../assets/panneaux-de-danger/a21-panneau-de-danger-debouche-cyclistes.png";
import a23 from "../assets/panneaux-de-danger/a23-panneau-traversee-d-une-aire-de-danger-aerien.png";
import a24 from "../assets/panneaux-de-danger/a24-panneau-de-danger-vent-lateral.png";
import ab1 from "../assets/panneaux-de-danger/ab1-panneau-d-intersection-priorite-a-droite.png";
import ab2 from "../assets/panneaux-de-danger/ab2-panneau-d-intersection-route-prioritaire.png";
import ab25 from "../assets/panneaux-de-danger/ab25-panneau-carrefour-a-sens-giratoire.png";
import ab3 from "../assets/panneaux-intersection/panneau-cedez-le-passage-a-l-intersection-ab3.png";
import ab4 from "../assets/panneaux-intersection/panneau-stop-ab4.png";
import ab6 from "../assets/panneaux-intersection/panneau-route-prioritaire-ab6.png";
import ab7 from "../assets/panneaux-intersection/panneau-fin-de-route-prioritaire-ab7.png";
import b0 from "../assets/panneaux-d-interdiction/panneau-circulation-interdite-b0.png";

export interface RoadSign {
  code: string;
  name: string;
  description: string;
  type: string;
  imageUrl: string;
}

// Comprehensive French road signs data
export const roadSigns: RoadSign[] = [
  // ===== DANGER (Type A) =====
  {
    code: "A1a",
    name: "Virage à droite",
    description:
      "Le panneau A1a est un panneau de signalisation de danger utilisé pour avertir les conducteurs de l'approche d'un virage dangereux orienté vers la droite. Il est installé en amont du virage afin de prévenir les risques de sortie de route, notamment sur les routes sinueuses, en zone montagneuse ou sur chaussée glissante. De forme triangulaire, avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant une flèche courbée vers la droite. Il incite les usagers à adapter leur vitesse et à renforcer leur vigilance.",
    type: "danger",
    imageUrl: a1a,
  },
  {
    code: "A1b",
    name: "Virage à gauche",
    description:
      "Le panneau A1b est un panneau de signalisation de danger utilisé pour avertir les conducteurs de l'approche d'un virage dangereux orienté vers la gauche. Il est principalement installé en amont de courbes serrées ou mal visibles, sur les routes sinueuses, en montagne, ou à proximité d'intersections complexes. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant une flèche courbée vers la gauche. Il incite les usagers à ralentir et à faire preuve de vigilance pour négocier le virage en toute sécurité.",
    type: "danger",
    imageUrl: a1b,
  },
  {
    code: "A1c",
    name: "Succession de virages dont le 1er est à droite",
    description:
      "Le panneau A1c est un panneau de signalisation de danger utilisé pour avertir les usagers de la présence de plusieurs virages consécutifs, le premier étant orienté vers la droite. Il est couramment installé sur les routes sinueuses, en montagne, ou dans les zones boisées où la visibilité est réduite. De forme triangulaire, avec un fond blanc et un liseré rouge, ce panneau comporte un pictogramme représentant une double courbe débutant par la droite. Il alerte les conducteurs afin qu'ils ralentissent et adaptent leur trajectoire.",
    type: "danger",
    imageUrl: a1c,
  },
  {
    code: "A2a",
    name: "Dos d'âne",
    description:
      "Le panneau A2a est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la présence d'un dos d'âne naturel ou d'un ressaut sur la chaussée. Ce type de relief, non aménagé artificiellement comme un ralentisseur, peut causer des désagréments ou des pertes de contrôle si la vitesse n'est pas adaptée. De forme triangulaire, avec un fond blanc et un liseré rouge, le panneau représente une bosse arrondie en noir, facilement identifiable par les conducteurs.",
    type: "danger",
    imageUrl: a2a,
  },
  {
    code: "A2b",
    name: "Ralentisseur (dos d'âne)",
    description:
      "Le panneau dos d'âne A2b, également appelé panneau ralentisseur, est un panneau de signalisation de danger essentiel pour avertir les conducteurs de la présence d'un dos d'âne ou coussin sur la chaussée. Ce signal joue un rôle crucial pour la sécurité routière : il incite les automobilistes à réduire leur vitesse afin de protéger les zones sensibles comme les écoles, les traversées piétonnes ou les quartiers résidentiels. De forme triangulaire avec un fond blanc et un liseré rouge, le panneau A2b assure une signalisation claire et visible.",
    type: "danger",
    imageUrl: a2b,
  },
  {
    code: "A3",
    name: "Chaussée rétrécie",
    description:
      "Le panneau A3 est un panneau de signalisation de danger utilisé pour prévenir les usagers d'un rétrécissement de la voie de circulation sur les deux côtés. Il est généralement implanté avant une section de route plus étroite, causée par des aménagements, des déformations, des travaux ou des contraintes géographiques. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant deux lignes convergentes vers le bas, signalant la réduction de largeur de la chaussée.",
    type: "danger",
    imageUrl: a3,
  },
  {
    code: "A3a",
    name: "Chaussée rétrécie par la droite",
    description:
      "Le panneau A3a est un panneau de signalisation de danger utilisé pour avertir les conducteurs d'un rétrécissement de la chaussée affectant la voie par la droite. Il est généralement implanté en amont de zones de travaux, passages étroits, accotements effondrés ou obstacles permanents réduisant la largeur de circulation. De forme triangulaire avec un fond blanc et un liseré rouge, ce panneau comporte un pictogramme représentant un rétrécissement asymétrique.",
    type: "danger",
    imageUrl: a3a,
  },
  {
    code: "A3b",
    name: "Chaussée rétrécie par la gauche",
    description:
      "Le panneau A3b est un panneau de signalisation de danger destiné à avertir les conducteurs que la chaussée se rétrécit sur le côté gauche. Il est utilisé en amont de zones où un obstacle ou un aménagement réduit la largeur de voie à gauche, comme des travaux, un terre-plein central, ou une bordure irrégulière. De forme triangulaire, à fond blanc bordé de rouge, il comporte un pictogramme représentant une voie rétrécie sur le côté gauche uniquement.",
    type: "danger",
    imageUrl: a3b,
  },
  {
    code: "A4",
    name: "Chaussée glissante",
    description:
      "Le panneau A4 est un panneau de signalisation de danger utilisé pour alerter les usagers de la route qu'ils vont emprunter un tronçon de chaussée présentant un risque accru de perte d'adhérence. Ce panneau est généralement installé en amont de zones sensibles : virages, ponts, descentes, routes exposées au verglas, à la pluie, ou aux déversements de carburant. De forme triangulaire, avec un fond blanc bordé de rouge, il comporte un pictogramme représentant un véhicule en dérapage.",
    type: "danger",
    imageUrl: a4,
  },
  {
    code: "A6",
    name: "Pont mobile",
    description:
      "Le panneau A6 est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la présence d'un pont mobile, c'est-à-dire un ouvrage d'art pouvant se lever ou s'ouvrir pour laisser passer des bateaux. Il est principalement implanté à l'approche de ponts basculants, tournants ou levants, situés au-dessus de canaux ou rivières navigables. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant un pont ouvert avec un navire stylisé.",
    type: "danger",
    imageUrl: a6,
  },
  {
    code: "A7",
    name: "Passage à niveau muni de barrières",
    description:
      "Le panneau A7 est un panneau de signalisation de danger utilisé pour avertir les usagers de la présence d'un passage à niveau équipé de barrières ou de demi-barrières automatiques. Il est placé en amont d'un croisement entre une voie ferrée et la chaussée, afin de prévenir les risques de collision avec un train ou un tramway. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant une barrière stylisée.",
    type: "danger",
    imageUrl: a7,
  },
  {
    code: "A8",
    name: "Passage à niveau sans barrière",
    description:
      "Le panneau A8 est un panneau de signalisation de danger utilisé pour avertir les usagers de la route qu'ils vont croiser une voie ferrée non protégée par des barrières. Il est essentiel pour prévenir les risques de collision avec des trains sur les passages à niveau dépourvus de dispositifs de fermeture automatiques. De forme triangulaire avec un fond blanc et un liseré rouge, ce panneau affiche un pictogramme représentant une locomotive.",
    type: "danger",
    imageUrl: a8,
  },
  {
    code: "A9",
    name: "Traversée de voies de tramways",
    description:
      "Le panneau A9 est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la présence d'un croisement entre la chaussée et une ou plusieurs voies de tramway. Il est couramment implanté en zone urbaine, notamment aux intersections où la voie de tram croise la circulation automobile sans séparation physique évidente. De forme triangulaire avec un fond blanc et un bord rouge, ce panneau représente un pictogramme de tramway vu de face.",
    type: "danger",
    imageUrl: a9,
  },
  {
    code: "A13a",
    name: "Enfants",
    description:
      "Le panneau A13a est un panneau de signalisation de danger destiné à alerter les conducteurs de la présence fréquente d'enfants sur ou aux abords de la chaussée. Il est généralement implanté à proximité des écoles, crèches, centres de loisirs, zones résidentielles ou passages piétons fréquentés par de jeunes usagers. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant deux enfants courant, symbolisant un risque accru et la nécessité de réduire la vitesse.",
    type: "danger",
    imageUrl: a13a,
  },
  {
    code: "A13b",
    name: "Passage pour piétons",
    description:
      "Le panneau A13b est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la présence d'un passage piéton à proximité. Il est principalement implanté en amont des zones de traversée piétonne, que ce soit en agglomération, à proximité des écoles, des arrêts de transport en commun ou dans des zones très fréquentées par les piétons. De forme triangulaire avec un fond blanc bordé de rouge, le panneau comporte un pictogramme représentant un piéton traversant sur des bandes blanches.",
    type: "danger",
    imageUrl: a13b,
  },
  {
    code: "A14",
    name: "Danger général",
    description:
      "Le panneau de danger A14, aussi appelé panneau point d'exclamation, est un panneau de signalisation utilisé pour avertir les conducteurs d'un risque non spécifié ou d'une situation dangereuse exceptionnelle. Indispensable pour la sécurité routière, il permet de signaler un danger temporaire ou particulier ne correspondant à aucun autre panneau. Souvent complété par un panonceau précisant la nature du danger (travaux, virages, rétrécissement de voie, etc.), le panneau A14 garantit une signalisation claire, visible et adaptée à toutes les configurations de route. De forme triangulaire avec un fond blanc bordé de rouge, il comporte un point d'exclamation noir au centre.",
    type: "danger",
    imageUrl: a14,
  },
  {
    code: "A15a1",
    name: "Passage d'animaux domestiques",
    description:
      "Le panneau A15a1 est un panneau de signalisation de danger destiné à avertir les usagers de la route de la possible traversée d'animaux d'élevage ou de ferme. Il est fréquemment utilisé dans les zones rurales, agricoles, ou à proximité de fermes et pâturages où circulent vaches, moutons, chèvres ou autres animaux domestiques. De forme triangulaire, avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant une vache.",
    type: "danger",
    imageUrl: a15a1,
  },
  {
    code: "A15a2",
    name: "Passage d'animaux domestiques (moutons)",
    description:
      "Le panneau A15a2 est un panneau de signalisation de danger utilisé pour alerter les conducteurs de la présence potentielle d'animaux d'élevage traversant la chaussée. Ce panneau est principalement implanté dans les zones agricoles, les pâturages en bord de route, ou les itinéraires ruraux où des troupeaux peuvent se déplacer librement ou encadrés. De forme triangulaire à fond blanc bordé de rouge, le panneau comporte un pictogramme représentant un mouton.",
    type: "danger",
    imageUrl: a15a2,
  },
  {
    code: "A15b",
    name: "Passage d'animaux sauvages",
    description:
      "Le panneau A15b sécurise les zones à risque avec le panneau passage d'animaux sauvages. Ce signal de danger est indispensable pour alerter les usagers de la présence potentielle d'animaux sur la chaussée. L'installation de ce panneau permet de réduire les accidents et les collisions, souvent graves, en incitant les automobilistes à la prudence. De forme triangulaire, avec un fond blanc bordé de rouge, il affiche un pictogramme représentant un cerf bondissant. Ce panneau incite les conducteurs à la vigilance accrue, notamment la nuit ou à l'aube.",
    type: "danger",
    imageUrl: a15b,
  },
  {
    code: "A15c",
    name: "Attention cavaliers ou chevaux",
    description:
      "Le panneau A15c est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la possible présence de cavaliers ou de chevaux sur ou à proximité de la chaussée. Il est couramment installé à proximité de centres équestres, chemins de randonnée, zones rurales ou boisées où la circulation équestre est fréquente. De forme triangulaire avec un fond blanc et un bord rouge, ce panneau comporte un pictogramme représentant un cheval monté par un cavalier.",
    type: "danger",
    imageUrl: a15c,
  },
  {
    code: "A16",
    name: "Descente dangereuse",
    description:
      "Le panneau A16 est un panneau de signalisation de danger utilisé pour avertir les conducteurs de l'approche d'une pente prononcée présentant un risque accru, notamment en cas de pluie, de neige ou de freinage prolongé. Ce modèle permet d'indiquer le pourcentage exact de la pente (ex. : 10 %, 12 %, 14 %) en fonction de la configuration de la voie. De forme triangulaire, avec un fond blanc et un liseré rouge, ce panneau comporte un pictogramme représentant un véhicule descendant une pente raide.",
    type: "danger",
    imageUrl: a16,
  },
  {
    code: "A17",
    name: "Feux tricolores",
    description:
      "Le panneau A17 est un panneau de signalisation de danger utilisé pour avertir les conducteurs de l'approche d'une intersection régulée par des feux de circulation. Il est principalement implanté lorsque les feux ne sont pas immédiatement visibles ou dans des zones où leur présence est inhabituelle (virages, descentes, routes rurales, etc.). De forme triangulaire, avec un fond blanc et un bord rouge, ce panneau comporte un pictogramme représentant les trois couleurs d'un feu de signalisation vertical.",
    type: "danger",
    imageUrl: a17,
  },
  {
    code: "A18",
    name: "Circulation dans les deux sens",
    description:
      "Le panneau A18 est un panneau de signalisation de danger utilisé pour avertir les conducteurs qu'ils vont quitter une route à sens unique pour emprunter une voie à double sens. Ce panneau est essentiel pour prévenir les risques de collision frontale, en particulier après une section à circulation unidirectionnelle. De forme triangulaire avec un fond blanc bordé de rouge, il présente deux flèches noires opposées verticalement, l'une vers le haut et l'autre vers le bas.",
    type: "danger",
    imageUrl: a18,
  },
  {
    code: "A19",
    name: "Risque de chute de pierres",
    description:
      "Le panneau A19 est un panneau de signalisation de danger utilisé pour prévenir les conducteurs d'un risque de chutes de pierres ou d'éboulements rocheux sur la chaussée. Il est couramment implanté sur les routes de montagne, en zones escarpées ou à proximité de falaises sujettes aux instabilités naturelles. De forme triangulaire, à fond blanc et bord rouge, ce panneau comporte un pictogramme représentant des pierres tombant d'une paroi rocheuse.",
    type: "danger",
    imageUrl: a19,
  },
  {
    code: "A20",
    name: "Débouché sur un quai ou une berge",
    description:
      "Le panneau A20 est un panneau de signalisation de danger utilisé pour avertir les conducteurs qu'ils approchent d'un quai, d'un port, d'un canal ou d'une berge sans barrière de protection. Il est principalement implanté en bordure de zones portuaires, fluviales ou côtières, où la chaussée mène directement à un plan d'eau. De forme triangulaire avec un fond blanc bordé de rouge, le panneau comporte un pictogramme représentant un véhicule tombant dans l'eau.",
    type: "danger",
    imageUrl: a20,
  },
  {
    code: "A21",
    name: "Débouché de cyclistes",
    description:
      "Le panneau A21 est un panneau de signalisation de danger utilisé pour avertir les conducteurs de la possible arrivée soudaine de cyclistes sur la chaussée. Il est généralement implanté à l'endroit où une piste cyclable ou un chemin réservé débouche sur une voie partagée avec les véhicules motorisés. De forme triangulaire, à fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant un cycliste. Il signale un danger potentiel et invite les automobilistes à redoubler de vigilance.",
    type: "danger",
    imageUrl: a21,
  },
  {
    code: "A23",
    name: "Traversée d'une aire de danger aérien",
    description:
      "Le panneau A23 est un panneau de signalisation de danger utilisé pour avertir les conducteurs qu'ils traversent une zone où des aéronefs peuvent évoluer à très basse altitude. Il est généralement implanté à proximité des pistes d'atterrissage ou de décollage d'aéroclubs, d'aérodromes, d'héliports ou de bases militaires. De forme triangulaire avec un fond blanc bordé de rouge, ce panneau comporte un pictogramme représentant un avion stylisé.",
    type: "danger",
    imageUrl: a23,
  },
  {
    code: "A24",
    name: "Vent latéral",
    description:
      "Le panneau A24 est un panneau de signalisation de danger qui avertit les conducteurs d'un risque de vents latéraux violents sur une portion de route. Ce panneau est particulièrement utile dans les zones exposées comme les ponts, viaducs, routes de montagne ou plaine ouverte. De forme triangulaire avec un fond blanc bordé de rouge, il comporte le pictogramme d'un manche à air incliné, symbole universel du vent.",
    type: "danger",
    imageUrl: a24,
  },
  {
    code: "AB1",
    name: "Intersection avec priorité à droite",
    description:
      "Le panneau AB1, également appelé panneau “priorité à droite”, est un panneau de signalisation de danger utilisé pour avertir les conducteurs qu’ils vont aborder une intersection où la règle de la priorité à droite s’applique. Ce panneau est indispensable sur les routes où la priorité n’est pas régie par un marquage ou une autre signalisation explicite. De forme triangulaire avec un fond blanc bordé de rouge, il comporte un symbole en forme de croix noire représentant une intersection classique. Il incite les conducteurs à ralentir et à être attentifs aux véhicules arrivant de la droite.",
    type: "danger",
    imageUrl: ab1,
  },
  {
    code: "AB2",
    name: "Route prioritaire",
    description:
      "Le panneau AB2, également appelé panneau “Route prioritaire”, est un panneau de signalisation de prescription utilisé pour indiquer que la route sur laquelle circule le conducteur bénéficie de la priorité à toutes les intersections à venir, jusqu’à ce qu’un panneau de fin de priorité (AB6) le contredise. De forme carrée, avec un fond blanc et un filet noir, il comporte un symbole losange jaune bordé de blanc. Ce panneau est installé sur les routes principales ou départementales, en particulier lorsqu’elles croisent des voies secondaires ou en sortie d’agglomération.",
    type: "danger",
    imageUrl: ab2,
  },
  {
    code: "AB25",
    name: "Carrefour à sens giratoire",
    description:
      "Le panneau AB25, également appelé panneau “Carrefour à sens giratoire”, est un panneau de signalisation de prescription qui indique l’obligation pour les conducteurs d’emprunter le rond-point dans le sens inverse des aiguilles d’une montre, tout en cédant le passage aux véhicules déjà engagés. Ce panneau s’applique aux carrefours aménagés en giratoire avec une priorité circulaire. De forme triangulaire à fond blanc et liseré rouge avec trois flèches blanches disposées en cercle, il impose la circulation giratoire. Il est toujours utilisé en complément du panneau AB3 “Cédez le passage”, positionné juste avant l’entrée du rond-point.",
    type: "danger",
    imageUrl: ab25,
  },

  // ===== INTERSECTION ET PRIORITÉ (Type AB) =====
  {
    code: "AB1",
    name: "Intersection avec priorité à droite",
    description:
      "Le panneau AB1, également appelé panneau « priorité à droite », est un panneau de signalisation de danger utilisé pour avertir les conducteurs qu'ils vont aborder une intersection où la règle de la priorité à droite s'applique. Ce panneau est indispensable sur les routes où la priorité n'est pas régie par un marquage ou une autre signalisation explicite. De forme triangulaire avec un fond blanc bordé de rouge, il comporte un symbole en forme de croix noire représentant une intersection classique.",
    type: "intersection",
    imageUrl: ab1,
  },
  {
    code: "AB2",
    name: "Route prioritaire",
    description:
      "Le panneau AB2, également appelé panneau « Route prioritaire », est un panneau de signalisation de prescription utilisé pour indiquer que la route sur laquelle circule le conducteur bénéficie de la priorité à toutes les intersections à venir, jusqu'à ce qu'un panneau de fin de priorité (AB6) le contredise. De forme carrée, avec un fond blanc et un filet noir, il comporte un symbole losange jaune bordé de blanc.",
    type: "intersection",
    imageUrl: ab2,
  },
  {
    code: "AB3",
    name: "Cédez le passage à l'intersection",
    description:
      "Le panneau AB3, également appelé panneau « Cédez le passage », est un panneau de signalisation de prescription qui impose aux conducteurs de céder la priorité aux véhicules circulant sur la route qu'ils vont croiser ou rejoindre. Il est installé en amont des intersections où la règle de priorité doit être formellement indiquée, en l'absence de feux tricolores ou de signalisation automatique.",
    type: "intersection",
    imageUrl: ab3,
  },
  {
    code: "AB4",
    name: "Stop",
    description:
      "Le panneau AB4, plus connu sous le nom de panneau Stop, est un panneau de signalisation réglementaire imposant aux conducteurs de marquer un arrêt absolu à l'intersection où il est implanté. Il est obligatoire à toutes les intersections présentant un danger ou un manque de visibilité, que ce soit en zone urbaine, rurale ou sur le réseau secondaire.",
    type: "intersection",
    imageUrl: ab4,
  },
  {
    code: "AB6",
    name: "Route à caractère prioritaire",
    description:
      "Le panneau AB6 indique une route à caractère prioritaire, symbolisé par un losange jaune et blanc. Panneau de police de type AB.",
    type: "intersection",
    imageUrl: ab6,
  },
  {
    code: "AB7",
    name: "Fin de route à caractère prioritaire",
    description:
      "Le panneau AB7 indique la fin du caractère prioritaire de la route, symbolisé par un losange jaune et blanc barré. Panneau de police de type AB.",
    type: "intersection",
    imageUrl: ab7,
  },
  {
    code: "AB25",
    name: "Carrefour à sens giratoire",
    description:
      "Le panneau AB25, également appelé panneau « Carrefour à sens giratoire », est un panneau de signalisation de prescription qui indique l'obligation pour les conducteurs d'emprunter le rond-point dans le sens inverse des aiguilles d'une montre, tout en cédant le passage aux véhicules déjà engagés. Ce panneau s'applique aux carrefours aménagés en giratoire avec une priorité circulaire. De forme triangulaire à fond blanc et liseré rouge avec trois flèches disposées en cercle.",
    type: "intersection",
    imageUrl: ab25,
  },

  // ===== INTERDICTION (Type B) =====
  {
    code: "B0",
    name: "Circulation interdite",
    description:
      "Le panneau B0, également appelé panneau « Circulation interdite », est un panneau de signalisation réglementaire indiquant une interdiction générale de circuler pour tous les véhicules. Il est principalement installé à l'entrée de zones protégées, voies privées, chantiers, ou routes temporairement fermées à la circulation.",
    type: "interdiction",
    imageUrl: b0,
  },
  {
    code: "B1",
    name: "Sens interdit",
    description:
      "Le panneau B1, également appelé panneau sens interdit, est un panneau de signalisation réglementaire utilisé pour interdire l'accès à une voie dans un sens. Obligatoire sur la voie publique, il est indispensable dans les rues à sens unique, les zones réglementées, ou encore les parkings d'entreprise et sites privés. C'est certainement le plus connu. Il peut être complété d'un panonceau « sauf vélo » ou « sauf riverains ».",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/France_road_sign_B1.svg",
  },
  {
    code: "B2a",
    name: "Interdiction de tourner à gauche",
    description:
      "Le panneau B2a est un panneau de signalisation réglementaire utilisé pour interdire aux conducteurs d'effectuer un virage à gauche. Il est généralement implanté à l'approche d'intersections, de carrefours dangereux, ou sur des axes où le tournant à gauche pourrait compromettre la sécurité ou la fluidité du trafic.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/France_road_sign_B2a.svg",
  },
  {
    code: "B2b",
    name: "Interdiction de tourner à droite",
    description:
      "Le panneau B2b est un panneau de signalisation réglementaire destiné à interdire aux conducteurs d'effectuer un virage à droite. Il est généralement implanté à proximité d'intersections, de carrefours dangereux ou sur des voies où le tournant à droite représenterait un risque pour la sécurité ou la fluidité du trafic.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/France_road_sign_B2b.svg",
  },
  {
    code: "B2c",
    name: "Interdiction de faire demi-tour",
    description:
      "Le panneau B2c est un panneau de signalisation réglementaire destiné à interdire aux conducteurs d'effectuer un demi-tour. Il est principalement implanté sur les routes où une telle manœuvre serait dangereuse, comme les carrefours complexes, les zones de forte circulation ou les routes étroites.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/France_road_sign_B2c.svg",
  },
  {
    code: "B3",
    name: "Interdiction de dépasser",
    description:
      "Le panneau B3 est un panneau de signalisation réglementaire interdisant aux conducteurs de dépasser les véhicules à moteur autres que les deux-roues sans side-car. Il est couramment implanté sur les routes sinueuses, les zones à faible visibilité, ou les sections dangereuses où le dépassement représente un risque élevé d'accident. Cette interdiction prend fin dès que le conducteur passe un panneau de fin d'interdiction comme le B34 ou B31.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/France_road_sign_B3.svg",
  },
  {
    code: "B3a",
    name: "Interdiction de dépasser par les poids lourds",
    description:
      "Le panneau B3a est un panneau de signalisation réglementaire qui interdit aux véhicules de transport de marchandises dont le poids total autorisé en charge (PTAC) dépasse 3,5 tonnes d'effectuer un dépassement. Il est couramment implanté sur les routes à fort trafic, dans les zones accidentogènes, ou sur les sections où la largeur et la visibilité ne permettent pas de manœuvres sécurisées.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/France_road_sign_B3a.svg",
  },
  {
    code: "B4",
    name: "Arrêt douane",
    description:
      "Le panneau B4 est un panneau de signalisation réglementaire imposant aux conducteurs de s'arrêter obligatoirement à un poste de contrôle douanier. Il est utilisé aux frontières, dans les zones portuaires, aéroports ou sur certains axes stratégiques où des contrôles peuvent être effectués.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/France_road_sign_B4.svg",
  },
  {
    code: "B5a",
    name: "Arrêt gendarmerie",
    description:
      "Le panneau B5a, également appelé panneau d'arrêt gendarmerie, est un panneau de signalisation réglementaire utilisé pour signaler la proximité d'un barrage mobile de gendarmerie où l'arrêt est obligatoire, assurant ainsi la sécurité et le respect des contrôles.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/France_road_sign_B5a.svg",
  },
  {
    code: "B5b",
    name: "Arrêt police",
    description:
      "Le panneau B5b, également appelé panneau d'arrêt police, est un panneau de signalisation réglementaire utilisé pour signaler la proximité d'un barrage mobile de police où l'arrêt est obligatoire. Imposé par les autorités, il indique aux usagers qu'ils doivent impérativement marquer un arrêt pour se soumettre aux contrôles.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/France_road_sign_B5b.svg",
  },
  {
    code: "B5c",
    name: "Arrêt péage",
    description:
      "Le panneau B5c, également appelé panneau d'arrêt péage, est un panneau de signalisation réglementaire utilisé pour indiquer l'obligation de s'arrêter à proximité d'un poste de péage. Obligatoire sur la voie publique, il est généralement implanté en amont des barrières pour permettre la prise d'un ticket ou le paiement du droit de passage.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/France_road_sign_B5c.svg",
  },
  {
    code: "B7a",
    name: "Accès interdit aux motos et voitures",
    description:
      "Le panneau B7a est un panneau de signalisation réglementaire utilisé pour interdire l'accès aux motos et voitures, tout en autorisant les cyclomoteurs. Obligatoire sur la voie publique, il est généralement implanté aux entrées de zones piétonnes, résidentielles ou protégées où la circulation motorisée doit être restreinte.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/France_road_sign_B7a.svg",
  },
  {
    code: "B7b",
    name: "Accès interdit à tous les véhicules à moteur",
    description:
      "Le panneau B7b est un panneau de signalisation réglementaire destiné à interdire la circulation de tout véhicule motorisé dans les zones protégées. Indispensable pour sécuriser les espaces piétonniers, les parcs et les zones sensibles, il garantit le respect des règles de circulation et prévient les nuisances liées aux véhicules.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/France_road_sign_B7b.svg",
  },
  {
    code: "B8",
    name: "Accès interdit aux camions",
    description:
      "Le panneau B8, également appelé panneau d'interdiction aux camions, est un panneau de signalisation réglementaire employé pour interdire l'accès aux véhicules affectés au transport de marchandises. Utilisé sur la voirie publique, il est généralement implanté à l'entrée de zones sensibles, de centres-villes ou de voies non adaptées au passage des poids lourds.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/France_road_sign_B8.svg",
  },
  {
    code: "B9a",
    name: "Accès interdit aux piétons",
    description:
      "Le panneau B9a est un panneau de signalisation réglementaire destiné à interdire la circulation des piétons dans les zones à risque. Obligatoire sur les voiries concernées, il trouve sa place en bordure d'autoroutes, le long des voies ferrées ou à l'entrée de sites sensibles comme les chantiers et certains espaces verts.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/France_road_sign_B9a.svg",
  },
  {
    code: "B9b",
    name: "Accès interdit aux cycles",
    description:
      "Le panneau B9b est un panneau de signalisation réglementaire destiné à informer les cyclistes qu'ils n'ont pas l'autorisation de pénétrer dans une voie, une rue ou un espace ouvert à la circulation. Indispensable pour organiser la cohabitation entre différents usagers, il contribue à la sécurité routière en délimitant clairement les parcours cyclables.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/France_road_sign_B9b.svg",
  },
  {
    code: "B10a",
    name: "Longueur limitée",
    description:
      "Panneau routier pour interdire un accès aux véhicules ou ensemble de véhicules ayant une longueur, chargement compris, supérieure à la longueur indiquée sur le panneau. Certains usagers peuvent être soumis à des restrictions d'accès spécifiques dus à leur gabarit de véhicule.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/France_road_sign_B10a.svg",
  },
  {
    code: "B11",
    name: "Largeur limitée",
    description:
      "Panneau routier pour interdire un accès aux véhicules ayant une largeur, chargement compris, supérieure à la largeur indiquée sur le panneau. Il doit être implanté à proximité immédiate de la zone ouverte à la circulation où la prescription s'applique. Cette signalisation permet de réguler le trafic et éviter les dangers.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/France_road_sign_B11.svg",
  },
  {
    code: "B12",
    name: "Limitation de hauteur",
    description:
      "Le panneau B12 est un panneau de signalisation réglementaire utilisé pour interdire l'accès aux véhicules dont la hauteur dépasse une certaine valeur. Il est principalement installé à l'approche de tunnels, ponts, passages couverts, parkings ou portiques d'entrée, afin d'éviter tout risque de collision ou d'endommagement des infrastructures.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/France_road_sign_B12.svg",
  },
  {
    code: "B13",
    name: "Limitation de tonnage",
    description:
      "Le panneau B13 est un panneau de signalisation réglementaire utilisé pour interdire l'accès aux véhicules dont le poids total autorisé en charge (PTAC) dépasse une certaine limite. Il est couramment implanté à l'entrée des ponts, routes fragiles, zones urbaines, ou voies d'accès à gabarit limité, afin de protéger les infrastructures et garantir la sécurité de la circulation.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/France_road_sign_B13.svg",
  },
  {
    code: "B13a",
    name: "Limitation de poids par essieu",
    description:
      "Le panneau B13a est un panneau de signalisation réglementaire utilisé pour interdire l'accès aux véhicules dont la charge par essieu dépasse une certaine limite. Il est généralement implanté sur les ponts, routes fragiles, voies d'accès rurales ou zones à chaussée sensible, afin de préserver les infrastructures.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/France_road_sign_B13a.svg",
  },
  {
    code: "B14",
    name: "Limitation de vitesse",
    description:
      "Le panneau B14 est un panneau de signalisation réglementaire utilisé pour indiquer la vitesse maximale autorisée sur une portion de voie. Obligatoire sur la voie publique, il est couramment installé en entrée d'agglomération, sur les routes communales ou départementales, ainsi que dans certaines zones industrielles ou résidentielles.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/France_road_sign_B14_%2850%29.svg",
  },
  {
    code: "B15",
    name: "Sens prioritaire",
    description:
      "Alertez les usagers qu'ils sont obligés de céder le passage aux véhicules venant en sens inverse à l'aide de ce panneau B15. Il doit être placé à proximité de la zone ou la prescription s'applique, souvent ce panneau de signalisation est placé près d'un rétrécissement de la chaussée.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/France_road_sign_B15.svg",
  },
  {
    code: "B16",
    name: "Klaxon interdit",
    description:
      "L'avertisseur sonore est interdit en ville sauf cas de danger immédiat (pour exemple : si un autre automobiliste ne vous a pas vu ou alors dans un virage sans visibilité pour signaler votre présence...).",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/France_road_sign_B16.svg",
  },
  {
    code: "B17",
    name: "Distance de sécurité",
    description:
      "Panneau routier rond à fond blanc, bordé de rouge avec à son centre deux pictogrammes indiquant l'avant et l'arrière d'une voiture avec, entre les deux, une indication de longueur. Il signale à l'usager qu'il doit maintenir un intervalle (au minimum égal à la valeur indiquée) avec le véhicule qui le précède.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/France_road_sign_B17.svg",
  },
  {
    code: "B31",
    name: "Fin d'interdiction",
    description:
      "Panneau routier blanc trait noir permettant d'indiquer immédiatement la fin de toutes les prescriptions précédemment annoncées. Ces panneaux peuvent être complétés d'un panonceau, par exemple pour préciser à quelle distance la fin des interdictions est effective. En l'absence de nouvelles signalisations, les automobilistes doivent circuler normalement en tenant compte du Code de la route.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/France_road_sign_B31.svg",
  },
  {
    code: "B33",
    name: "Fin de limitation de vitesse",
    description:
      "Panneau routier indiquant aux automobilistes la fin de la limitation de vitesse.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/France_road_sign_B33_%2850%29.svg",
  },
  {
    code: "B34",
    name: "Fin d'interdiction de dépasser",
    description:
      "L'objectif de la signalisation de prescription est de porter à la connaissance des usagers de la route les interdictions et obligations particulières qui viennent compléter le Code de la route. Ce panneau B34 met fin à l'interdiction de dépasser signalée par le panneau B3.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/France_road_sign_B34.svg",
  },
  {
    code: "B34a",
    name: "Fin d'interdiction de dépasser pour les camions",
    description:
      "Pour mettre fin à l'interdiction de dépasser notifiée par le panneau B3a vous devez utiliser ce panneau routier B34a qui met donc un terme à la fin de cette interdiction.",
    type: "interdiction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/France_road_sign_B34a.svg",
  },

  // ===== STATIONNEMENT =====
  {
    code: "B6a1",
    name: "Stationnement interdit",
    description:
      "Le panneau B6a1 est un panneau de signalisation réglementaire utilisé pour interdire le stationnement des véhicules sur une zone définie, tout en autorisant l'arrêt momentané. Il est couramment installé en bordure de chaussée, à proximité des commerces, entrées de garage, zones de livraison ou voies étroites. De forme ronde, avec un fond bleu barré d'un simple trait rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/France_road_sign_B6a1.svg",
  },
  {
    code: "B6a2",
    name: "Stationnement alterné semi-mensuel",
    description:
      "Le panneau B6a2 est un panneau de signalisation réglementaire indiquant que le stationnement est autorisé uniquement d'un côté de la chaussée, selon la période du mois. Il est généralement utilisé en agglomération, notamment dans les rues étroites ou résidentielles, afin de faciliter la circulation et le passage des services publics. De forme ronde, avec un fond bleu bordé de rouge et barré d'une diagonale rouge, ce panneau peut comporter une indication numérique (ex. : « 1-15 »).",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/France_road_sign_B6a2.svg",
  },
  {
    code: "B6a3",
    name: "Stationnement alterné dans le mois",
    description:
      "Le panneau B6a3 est un panneau de signalisation réglementaire utilisé pour indiquer que le stationnement est autorisé uniquement d'un côté de la chaussée selon la quinzaine du mois. Il complète le système de stationnement alterné, permettant une meilleure fluidité de circulation et facilitant l'accès des véhicules de service. De forme ronde, avec un fond bleu bordé de rouge et barré d'une diagonale rouge, ce panneau affiche généralement « 16-31 ».",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/France_road_sign_B6a3.svg",
  },
  {
    code: "B6b1",
    name: "Zone à stationnement interdit",
    description:
      "Le panneau B6b1 est un panneau de signalisation réglementaire indiquant qu'il est interdit de stationner sur toute la zone concernée, dès le point où il est implanté. Il est généralement utilisé en centre-ville, sur les voies réservées aux piétons ou aux transports en commun, et dans les zones où il est nécessaire de garantir la fluidité de circulation. De forme carrée avec un fond blanc bordé de rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/France_road_sign_B6b1.svg",
  },
  {
    code: "B6b2",
    name: "Zone à stationnement alterné semi-mensuel",
    description:
      "Le panneau B6b2 est un panneau de signalisation réglementaire indiquant que dans toute la zone concernée, le stationnement est autorisé en alternance : du 1er au 15 d'un côté de la chaussée, puis du 16 au 31 de l'autre côté. Ce dispositif permet de garantir la fluidité du trafic et de faciliter le passage des véhicules de service. De forme carrée à fond blanc, avec un filet rouge et le pictogramme d'interdiction de stationner.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/France_road_sign_B6b2.svg",
  },
  {
    code: "B6b3",
    name: "Zone à stationnement de durée limitée",
    description:
      "Le panneau B6b3, également appelé panneau « Zone bleue », est un panneau de signalisation réglementaire indiquant une zone où le stationnement est autorisé mais limité dans le temps. Pour être conforme, le conducteur doit afficher un disque de stationnement indiquant son heure d'arrivée. Ce système est couramment utilisé en centre-ville, devant les commerces, ou dans les zones à forte rotation de véhicules. De forme carrée à fond blanc avec un liseré rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/France_road_sign_B6b3.svg",
  },
  {
    code: "B6b4",
    name: "Zone à stationnement payant",
    description:
      "Le panneau B6b4 est un panneau de signalisation réglementaire indiquant que le stationnement dans la zone concernée est autorisé uniquement moyennant un paiement. Il est généralement utilisé dans les centres-villes, les zones commerçantes, près des gares, ou encore dans les quartiers où la rotation des véhicules doit être encouragée. De forme carrée à fond blanc avec un filet rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/France_road_sign_B6b4.svg",
  },
  {
    code: "B6b5",
    name: "Fin de zone à stationnement alterné semi-mensuel",
    description:
      "Le panneau B6b5 est un panneau de signalisation réglementaire indiquant la fin d'une zone où s'appliquait la règle du stationnement alterné semi-mensuel. Il complète le dispositif formé par le panneau B6b2 qui en marque le début. De forme carrée à fond blanc avec un filet rouge, il reprend le pictogramme du stationnement alterné (1-15 / 16-31) avec un symbole de fin d'application.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/France_road_sign_B6b5.svg",
  },
  {
    code: "B6d",
    name: "Arrêt et stationnement interdits",
    description:
      "Le panneau B6d est un panneau de signalisation réglementaire utilisé pour interdire à tout véhicule de s'arrêter ou de stationner sur la zone concernée. Il est obligatoire en voirie urbaine, sur les voies à circulation dense, les abords de passages piétons, ou encore les accès de secours et zones sensibles. Reconnaissable à sa forme ronde, son fond bleu barré d'une croix rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/France_road_sign_B6d.svg",
  },
  {
    code: "B50a",
    name: "Sortie de zone à stationnement interdit",
    description:
      "Le panneau routier B50a est un panneau de signalisation d'interdiction conçu pour indiquer aux conducteurs la fin d'une zone où le stationnement est strictement prohibé. Il est principalement installé à la sortie de secteurs urbains, piétonniers ou résidentiels soumis à une interdiction de stationner. Ce panneau circulaire à fond blanc, bordé d'un liseré rouge, arbore un pictogramme : la lettre « P » barrée d'un trait diagonal rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/France_road_sign_B50a.svg",
  },
  {
    code: "B50b",
    name: "Sortie de zone à stationnement unilatéral",
    description:
      "Le panneau routier B50b indique la fin d'une zone où le stationnement n'est autorisé que d'un seul côté de la chaussée, selon un système d'alternance semi-mensuelle. Il se positionne à la sortie des secteurs concernés afin de signaler aux conducteurs la reprise normale du stationnement.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/France_road_sign_B50b.svg",
  },
  {
    code: "B50c",
    name: "Sortie de zone de stationnement à durée limitée",
    description:
      "Le panneau B50c est un panneau de signalisation réglementaire indiquant la fin d'une zone où le stationnement était soumis à une durée maximale, généralement contrôlée par un disque de stationnement. Il complète le dispositif amorcé par le panneau B6b3 qui marque l'entrée de la zone. De forme carrée à fond blanc bordé de noir.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/France_road_sign_B50c.svg",
  },
  {
    code: "B50d",
    name: "Fin de zone à stationnement payant",
    description:
      "Le panneau routier B50d est un panneau de signalisation d'interdiction utilisé pour indiquer la levée de l'obligation de paiement du stationnement. Il est principalement implanté à la sortie de zones urbaines, commerciales ou résidentielles soumises à tarif, afin d'informer les conducteurs que le stationnement redevient gratuit. Ce panneau circulaire à fond blanc, cerclé d'un liseré rouge.",
    type: "stationnement",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/France_road_sign_B50d.svg",
  },

  // ===== INDICATION (Type C) =====
  {
    code: "C1a",
    name: "Indication de parking",
    description:
      "Le panneau C1a est un panneau de signalisation d'information destiné à orienter les conducteurs vers une zone de stationnement. Il est posé en bord de voirie ou à l'entrée des parkings publics, privés ou résidentiels, pour signaler clairement l'accès aux emplacements dédiés. Ce panneau de type C présente un fond bleu muni du symbole universel « P » blanc au centre.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/France_road_sign_C1a.svg",
  },
  {
    code: "C1b",
    name: "Parking à durée limitée contrôlé",
    description:
      "Le panneau C1b est un panneau d'indication routière destiné à signaler un espace de stationnement gratuit soumis à une durée maximale, avec contrôle. Il informe les conducteurs de la réglementation en vigueur et du contrôle de la durée de stationnement.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/France_road_sign_C1b.svg",
  },
  {
    code: "C1c",
    name: "Parking payant",
    description:
      "Le panneau C1c est un panneau de signalisation d'information utilisé pour indiquer un espace de stationnement soumis à paiement. Il est principalement implanté à l'entrée des parkings publics ou privés où l'utilisateur doit s'acquitter d'un tarif avant de se garer. Ce panneau rectangulaire à fond bleu est reconnaissable grâce à son symbole distinctif : un « P » blanc accompagné d'un pictogramme d'horodateur.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/France_road_sign_C1c.svg",
  },
  {
    code: "C4a",
    name: "Vitesse conseillée",
    description:
      "Le panneau C4a est un panneau de signalisation d'information destiné à indiquer aux conducteurs la vitesse recommandée sur une portion de route. Il s'installe généralement aux abords d'écoles, dans les zones résidentielles ou sur des secteurs présentant des contraintes géométriques (virages, rétrécissements) afin de sensibiliser à la prudence.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/France_road_sign_C4a.svg",
  },
  {
    code: "C4b",
    name: "Fin de vitesse conseillée",
    description:
      "Le panneau C4b est un panneau de signalisation d'information utilisé pour indiquer la fin d'une zone où une vitesse est recommandée. Il est principalement implanté en sortie de zones de ralentissement, dans les abords scolaires ou sur des voies où une limitation temporaire de vitesse était en vigueur.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/France_road_sign_C4b.svg",
  },
  {
    code: "C5",
    name: "Emplacement réservé aux taxis",
    description:
      "Le panneau C5 est un panneau de signalisation d'information indiquant la présence d'un emplacement ou d'une zone réservée exclusivement au stationnement des taxis. Il est implanté principalement en milieu urbain, devant les gares, aéroports, hôtels, hôpitaux ou dans les centres-villes, afin de faciliter la prise en charge des passagers.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/France_road_sign_C5.svg",
  },
  {
    code: "C6",
    name: "Arrêt d'autobus",
    description:
      "Le panneau C6 est un panneau de signalisation d'information indiquant un emplacement réservé à l'arrêt ou au stationnement des autobus affectés au transport public de voyageurs. Il est fréquemment installé dans les zones urbaines à proximité des abribus ou des zones d'embarquement/débarquement. Ce panneau rectangulaire à fond bleu est reconnaissable à son pictogramme blanc représentant un autobus stylisé.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/France_road_sign_C6.svg",
  },
  {
    code: "C7",
    name: "Passage de tramways",
    description:
      "Le panneau C7 est un panneau de signalisation d'information indiquant la présence d'une zone où circulent des tramways. Il informe les usagers de la cohabitation entre véhicules routiers et tramways, et les incite à redoubler de vigilance, notamment aux intersections et traversées.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/France_road_sign_C7.svg",
  },
  {
    code: "C8",
    name: "Emplacement d'arrêt d'urgence",
    description:
      "Le panneau C8 est un panneau de signalisation d'information indiquant aux usagers la présence d'un espace spécialement aménagé pour s'arrêter en cas de nécessité absolue. Il est couramment implanté le long des autoroutes et voies rapides afin de permettre aux conducteurs de se mettre en sécurité en cas de panne ou de problème urgent.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/France_road_sign_C8.svg",
  },
  {
    code: "C12",
    name: "Circulation à sens unique",
    description:
      "Le panneau C12 est un panneau de signalisation d'information destiné à indiquer qu'une voie ou portion de voie est réservée à une circulation dans un seul et unique sens. Il est généralement installé à l'entrée des rues en sens unique afin de prévenir les usagers et d'orienter correctement les flux de circulation. Ce panneau rectangulaire à fond bleu est facilement reconnaissable grâce à une flèche blanche.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/France_road_sign_C12.svg",
  },
  {
    code: "C13a",
    name: "Voie sans issue",
    description:
      "Le panneau C13a est un panneau de signalisation d'information utilisé pour indiquer qu'une voie ne permet pas de débouché, sauf éventuellement pour les piétons ou cyclistes dans certains cas spécifiques. Il est principalement implanté à l'entrée de rues fermées à la circulation de transit, dans les zones résidentielles, les lotissements ou les accès privés. Ce panneau rectangulaire à fond bleu est facilement reconnaissable grâce à son symbole distinctif : une barre rouge horizontale sur fond blanc en haut d'un trait vertical.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/France_road_sign_C13a.svg",
  },
  {
    code: "C13b",
    name: "Présignalisation d'une impasse",
    description:
      "Le panneau C13b est un panneau de présignalisation routière destiné à prévenir les conducteurs de l'arrivée imminente d'un chemin sans issue, comme un cul-de-sac ou une impasse. Il est généralement implanté en amont des voies sans débouché, sur les routes secondaires, les lotissements ou les accès privés.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/France_road_sign_C13b.svg",
  },
  {
    code: "C13c",
    name: "Impasse sauf pour les piétons",
    description:
      "Le panneau C13c est un panneau de signalisation d'information destiné à indiquer qu'une voie est fermée à la circulation motorisée, tout en laissant un accès réservé aux piétons. Il est couramment implanté à l'entrée de rues sans issue dans les zones piétonnes, les cœurs de village, les lotissements ou les cheminements urbains.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/France_road_sign_C13c.svg",
  },
  {
    code: "C13d",
    name: "Impasse sauf pour piétons et cyclistes",
    description:
      "Le panneau C13d est un panneau de signalisation d'information utilisé pour indiquer qu'une voie ne permet pas le passage des véhicules motorisés tout en offrant une issue aux seuls piétons et cyclistes. Il est principalement implanté à l'entrée de rues fermées à la circulation de transit, dans les zones piétonnes partagées, les lotissements ou les accès privés disposant d'un cheminement doux.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/France_road_sign_C13d.svg",
  },
  {
    code: "C18",
    name: "Priorité par rapport à la circulation venant en sens inverse",
    description:
      "Le panneau C18 est un panneau de signalisation d'information utilisé pour signaler aux conducteurs qu'ils bénéficient de la priorité sur les véhicules venant en sens inverse, notamment dans des sections de chaussée rétrécies. Il est particulièrement implanté à l'approche de ponts étroits, rétrécissements ou alternats de circulation. De forme rectangulaire à fond bleu, le panneau C18 comporte deux flèches : une flèche blanche vers le haut (sens prioritaire) et une flèche rouge vers le bas (sens non prioritaire).",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/France_road_sign_C18.svg",
  },
  {
    code: "C20a",
    name: "Passage pour piétons",
    description:
      "Le panneau C20a est un panneau de signalisation d'information indiquant l'emplacement d'un passage piéton sur la chaussée. Il est utilisé pour avertir les conducteurs de la présence d'un passage protégé et inciter à la prudence à l'approche de zones piétonnes très fréquentées. Ce panneau rectangulaire à fond bleu est orné d'un pictogramme blanc représentant un piéton marchant sur un passage zébré.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/France_road_sign_C20a.svg",
  },
  {
    code: "C20c",
    name: "Traversée de tramway",
    description:
      "Le panneau C20c est un panneau de signalisation d'information indiquant aux usagers la présence d'une traversée de tramway. Il alerte les conducteurs et les piétons sur la nécessité d'une vigilance accrue, notamment en zone urbaine où tramways et véhicules partagent l'espace public.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/France_road_sign_C20c.svg",
  },
  {
    code: "C27",
    name: "Ralentisseur de type dos d'âne",
    description:
      "Le panneau C27, également désigné sous le nom de ralentisseur ou dos d'âne, est un panneau de signalisation d'information servant à prévenir les usagers de la route de la présence d'un dispositif de ralentissement de type dos d'âne sur la chaussée. Ce panneau est généralement installé en amont des ralentisseurs pour améliorer la sécurité, en particulier dans les zones à forte fréquentation piétonne ou aux abords d'établissements scolaires. De forme carrée à fond bleu.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/France_road_sign_C27.svg",
  },
  {
    code: "C107",
    name: "Route à accès réglementé",
    description:
      "Le panneau C107 est un panneau de signalisation de prescription indiquant l'entrée sur une voie réservée au trafic motorisé soumis à certaines restrictions. Il est couramment installé à l'entrée des voies rapides ou de routes départementales aménagées, interdisant notamment l'accès aux piétons, cyclistes et véhicules lents.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/France_road_sign_C107.svg",
  },
  {
    code: "C108",
    name: "Fin de route à accès réglementé",
    description:
      "Le panneau C108 est un panneau de signalisation de fin de prescription indiquant la sortie d'une voie réservée au trafic motorisé réglementé, comme les voies rapides ou certaines routes départementales aménagées. Il informe les usagers que la réglementation spécifique qui s'appliquait jusque-là cesse à partir de ce point.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/France_road_sign_C108.svg",
  },
  {
    code: "C111",
    name: "Entrée d'un tunnel",
    description: "Panneau indiquant l'entrée d'un tunnel.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/France_road_sign_C111.svg",
  },
  {
    code: "C112",
    name: "Fin de tunnel",
    description:
      "Le panneau d'indication de fin de tunnel C112 permet d'informer les usagers de la sortie d'un tunnel conformément à la réglementation en vigueur.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/France_road_sign_C112.svg",
  },
  {
    code: "C113",
    name: "Piste cyclable conseillée",
    description:
      "Le panneau Piste cyclable conseillée C113 permet d'indiquer clairement une voie réservée aux cycles, tout en restant conforme à la réglementation de la signalisation routière. Il informe les usagers de la route de la présence d'un aménagement réservé aux deux-roues.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/France_road_sign_C113.svg",
  },
  {
    code: "C114",
    name: "Fin d'une piste cyclable",
    description:
      "Le panneau Fin de piste cyclable C114 permet d'indiquer clairement la sortie d'une piste ou d'une bande cyclable, conformément à la réglementation de la signalisation routière. Il informe les cyclistes et les autres usagers de la route que l'aménagement réservé aux cycles prend fin.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/France_road_sign_C114.svg",
  },
  {
    code: "C115",
    name: "Voie verte",
    description:
      "Le panneau Voie verte C115 permet de signaler une voie réservée aux piétons, cyclistes et véhicules non motorisés, conformément à la réglementation de la signalisation routière. Installé à l'entrée d'un itinéraire dédié, ce panneau informe clairement les usagers motorisés de l'interdiction de circulation et garantit une cohabitation sécurisée entre piétons et cyclistes.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/France_road_sign_C115.svg",
  },
  {
    code: "C116",
    name: "Fin de voie verte",
    description:
      "Le panneau Fin de voie verte C116 permet d'indiquer la fin d'une voie réservée aux piétons, cavaliers et véhicules non motorisés. Implanté à l'issue d'un aménagement spécifique, ce panneau informe clairement les usagers que la voie verte prend fin et que les règles de circulation classiques s'appliquent à nouveau.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/France_road_sign_C116.svg",
  },
  {
    code: "C207",
    name: "Entrée d'autoroute",
    description: "Panneau d'indication de section de route autoroutière.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/France_road_sign_C207.svg",
  },
  {
    code: "C208",
    name: "Fin de section de route à statut autoroutier",
    description:
      "Le panneau C208 est un panneau d'indication routière destiné à signaler la fin d'une section de route à statut autoroutier. Il informe les conducteurs que les règles spécifiques applicables aux voies à caractère autoroutier prennent fin.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/France_road_sign_C208.svg",
  },
  {
    code: "B30",
    name: "Zone 30",
    description:
      "Le panneau Zone 30 – B30 signale clairement l'entrée dans une zone à vitesse limitée à 30 km/h. Il s'inscrit dans une démarche de sécurisation des déplacements en milieu urbain, résidentiel ou scolaire, en informant efficacement les usagers de la route.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/France_road_sign_B30.svg",
  },
  {
    code: "B51",
    name: "Fin de Zone 30",
    description:
      "Le panneau Fin de Zone 30 est un panneau de signalisation routière réglementaire destiné à informer les usagers de la route de la fin d'une zone où la vitesse était limitée à 30 km/h. Il est généralement implanté à la sortie des centres-villes, zones résidentielles, quartiers apaisés ou secteurs à circulation modérée.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/France_road_sign_B51.svg",
  },
  {
    code: "B52",
    name: "Zone de rencontre",
    description:
      "Le panneau B52 permet de signaler l'entrée dans une zone de rencontre, espace de circulation partagé où la priorité est donnée aux piétons et où la vitesse est limitée à 20 km/h. Cette zone vise à favoriser une cohabitation apaisée entre piétons, cyclistes et véhicules motorisés.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/France_road_sign_B52.svg",
  },
  {
    code: "B53",
    name: "Sortie de zone de rencontre",
    description:
      "Le panneau B53 est un panneau de signalisation routière indiquant la fin d'une zone de rencontre. Il informe les usagers que les règles particulières applicables dans cette zone — notamment la priorité donnée aux piétons et la limitation de vitesse à 20 km/h — ne s'appliquent plus au-delà de ce point.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/France_road_sign_B53.svg",
  },
  {
    code: "B54",
    name: "Zone piétonne",
    description:
      "Le panneau B54 est un panneau de signalisation routière indiquant l'entrée d'une zone piétonne. Il matérialise une aire dans laquelle les piétons sont prioritaires et où la circulation des véhicules est strictement réglementée conformément au Code de la route. Ce panneau est généralement implanté à l'accès des centres-villes, zones commerçantes ou secteurs à forte fréquentation piétonne.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/France_road_sign_B54.svg",
  },
  {
    code: "B55",
    name: "Fin d'aire piétonne",
    description:
      "Le panneau B55 est un panneau de signalisation routière indiquant la fin d'une aire piétonne. Il marque la sortie d'une zone dans laquelle les piétons étaient prioritaires et où les règles de circulation spécifiques s'appliquaient. Ce panneau est implanté en sortie de centres-villes, zones commerçantes ou secteurs à forte fréquentation piétonne.",
    type: "indication",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/France_road_sign_B55.svg",
  },

  // ===== OBLIGATION (Type B) =====
  {
    code: "B21-1",
    name: "Direction obligatoire vers la droite",
    description:
      "Le panneau B21-1 impose aux conducteurs de s'orienter à droite à l'approche d'une intersection ou d'un obstacle. De type police, ce panneau rond à fond bleu avec flèche blanche garantit une indication claire et immédiate pour fluidifier les manœuvres et sécuriser les trajectoires.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/France_road_sign_B21-1.svg",
  },
  {
    code: "B21-2",
    name: "Direction obligatoire vers la gauche",
    description:
      "Le panneau B21-2 « Obligation de tourner à gauche » est un panneau routier de type police à fond bleu et flèche blanche orientée à gauche. Il impose aux conducteurs de tourner à gauche avant le panneau, afin d'assurer une manœuvre claire et sécurisée aux carrefours, sorties de sites, zones de travaux ou accès réglementés.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/France_road_sign_B21-2.svg",
  },
  {
    code: "B21a1",
    name: "Contournement obligatoire par la droite",
    description:
      "Le panneau B21a1 est un panneau de type police à fond bleu avec flèche blanche orientée vers la droite. Il impose aux usagers de contourner l'obstacle du côté indiqué, améliorant la sécurité et la fluidité de la circulation sur la zone concernée.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/France_road_sign_B21a1.svg",
  },
  {
    code: "B21a2",
    name: "Contournement obligatoire par la gauche",
    description:
      "Le panneau rond B21a2 indique un contournement obligatoire par la gauche grâce à une flèche blanche sur fond bleu. Conçu pour la signalisation de police, il guide les usagers autour d'un obstacle, d'un îlot directionnel ou d'une zone de chantier.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/France_road_sign_B21a2.svg",
  },
  {
    code: "B21b",
    name: "Direction tout droit obligatoire",
    description:
      "Le panneau B21b – Direction tout droit obligatoire signale aux conducteurs qu'ils doivent poursuivre leur trajectoire en ligne droite à la prochaine intersection. Il sécurise les carrefours, fluidifie les mouvements et élimine les manœuvres dangereuses.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/France_road_sign_B21b.svg",
  },
  {
    code: "B21c1",
    name: "Direction obligatoire à droite à l'intersection",
    description:
      "Le panneau B21c1 « Direction obligatoire à droite » impose un sens de déplacement précis à la prochaine intersection : tourner à droite. Il s'agit d'un panneau de signalisation d'obligation de type police, indispensable pour guider les usagers et sécuriser la manœuvre aux carrefours, giratoires, sorties de sites ou zones de circulation dense.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/France_road_sign_B21c1.svg",
  },
  {
    code: "B21c2",
    name: "Direction obligatoire à gauche à l'intersection",
    description:
      "Le panneau B21c2 « Direction obligatoire à gauche à la prochaine intersection » est un panneau de signalisation essentiel pour la gestion des flux de circulation. Il impose la direction obligatoire à gauche au prochain carrefour afin de garantir la fluidité du trafic et de prévenir les manœuvres dangereuses.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/France_road_sign_B21c2.svg",
  },
  {
    code: "B21d1",
    name: "Aller tout droit ou à droite obligatoirement",
    description:
      "Le panneau B21d1 impose au conducteur de poursuivre tout droit ou d'obliquer à droite selon l'implantation. Rond à fond bleu, il garantit une lecture immédiate de l'obligation aux abords des carrefours et des zones à circulation dense.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/France_road_sign_B21d1.svg",
  },
  {
    code: "B21d2",
    name: "Aller tout droit ou à gauche",
    description:
      "Le panneau B21d2, dit panneau d'obligation de direction « aller tout droit ou à gauche », est un panneau de type police utilisé pour imposer aux conducteurs l'une des deux directions autorisées sur un carrefour ou une bifurcation.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/France_road_sign_B21d2.svg",
  },
  {
    code: "B21e",
    name: "Tourner à droite ou à gauche obligatoirement",
    description:
      "Le panneau B21e indique une direction obligatoire à la prochaine intersection : les conducteurs doivent tourner soit à droite, soit à gauche, sans possibilité d'aller tout droit. De forme ronde, à fond bleu avec flèches blanches orientées à droite et à gauche.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/France_road_sign_B21e.svg",
  },
  {
    code: "B22a",
    name: "Piste ou bande cyclable obligatoire",
    description:
      "Le panneau B22a « Piste ou bande cyclable obligatoire » est un panneau de type police qui signale aux usagers l'obligation de circuler sur un aménagement cyclable dédié. De forme ronde à fond bleu, il indique clairement l'itinéraire obligatoire pour les vélos et deux-roues.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/France_road_sign_B22a.svg",
  },
  {
    code: "B22b",
    name: "Chemin obligatoire pour piétons",
    description:
      "Le panneau B22b « Chemin obligatoire pour piétons » est un panneau de type police qui impose un cheminement piéton sécurisé sur la zone concernée.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/France_road_sign_B22b.svg",
  },
  {
    code: "B22c",
    name: "Chemin obligatoire pour cavaliers",
    description:
      "Le panneau B22c, aussi appelé panneau « Chemin obligatoire pour cavaliers », indique un itinéraire équestre imposé pour les chevaux et leurs cavaliers. Il s'emploie en entrée de pistes dédiées, parcs, forêts, chemins ruraux ou zones partagées.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/France_road_sign_B22c.svg",
  },
  {
    code: "B25",
    name: "Vitesse minimale obligatoire",
    description:
      "Le panneau B25 – Vitesse minimale obligatoire est un panneau de signalisation de type police qui impose aux conducteurs de circuler à une vitesse au moins égale à celle indiquée au centre du disque. Reconnaissable à son fond bleu et à son chiffre blanc, il s'emploie notamment sur voies rapides, tunnels, bretelles d'autoroute.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/France_road_sign_B25.svg",
  },
  {
    code: "B26",
    name: "Chaînes à neige obligatoires",
    description:
      "Le panneau B26 « Chaînes à neige obligatoires » est un panneau de type police indiquant l'obligation de circuler avec des chaînes à neige montées sur au moins deux roues motrices sur la portion de route concernée. Il est particulièrement recommandé à l'approche des cols, stations de ski et sections fréquemment enneigées.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/France_road_sign_B26.svg",
  },
  {
    code: "B27a",
    name: "Voie réservée aux autobus",
    description:
      "Le panneau B27a « Voie réservée aux autobus » est un panneau de type police qui signale qu'une voie est exclusivement réservée aux véhicules des services réguliers de transport en commun. Il s'implante notamment sur les couloirs de bus, aux abords des stations et dans les zones à forte fréquentation.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/France_road_sign_B27a.svg",
  },
  {
    code: "B27b",
    name: "Voie réservée aux tramways",
    description:
      "Le panneau B27b indique qu'une chaussée ou une voie est exclusivement dédiée à la circulation des trams. Sa forme ronde et son fond bleu avec pictogramme tram noir assurent une prescription immédiatement compréhensible.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/France_road_sign_B27b.svg",
  },
  {
    code: "B29",
    name: "Allumez vos feux",
    description:
      "Le panneau B29 « Allumez vos feux » est un panneau d'obligation rond bleu qui impose l'allumage des feux (croisement) aux conducteurs dans une zone donnée. Il est particulièrement recommandé à l'approche des tunnels, sur les axes de montagne, dans les secteurs fréquemment brumeux ou ombragés.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/France_road_sign_B29.svg",
  },
  {
    code: "B40",
    name: "Fin de piste ou bande cyclable obligatoire",
    description:
      "Le panneau B40 indique aux usagers que l'obligation d'emprunter l'aménagement cyclable prend fin. De forme ronde sur fond bleu, il intègre le pictogramme vélo avec annulation de l'obligation.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/France_road_sign_B40.svg",
  },
  {
    code: "B41",
    name: "Fin de chemin obligatoire pour piétons",
    description:
      "Le panneau B41 « Fin de chemin obligatoire pour piétons » indique la fin de l'obligation d'emprunter un chemin réservé aux piétons. Ronde, sur fond bleu avec pictogramme blanc de fin d'obligation.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/France_road_sign_B41.svg",
  },
  {
    code: "B43",
    name: "Fin de vitesse minimale obligatoire",
    description:
      "Panneau de signalisation B43 indiquant la fin de l'obligation de vitesse minimale. Ce panneau routier de type police signale aux conducteurs que la contrainte de vitesse minimale cesse immédiatement à son niveau.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/France_road_sign_B43.svg",
  },
  {
    code: "B44",
    name: "Fin d'obligation de l'usage des chaînes",
    description:
      "Le panneau B44, ou panneau de fin d'obligation d'usage des chaînes à neige, indique clairement la fin d'une zone où les chaînes étaient imposées (par exemple après une zone montagneuse ou un col).",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/France_road_sign_B44.svg",
  },
  {
    code: "B45a",
    name: "Fin de voie réservée transports en commun",
    description:
      "Le panneau B45a signale la fin de la voie réservée aux véhicules des services réguliers de transport en commun. Placé en sortie de couloir de bus ou à l'issue d'une section dédiée, il met explicitement fin à l'obligation de circulation réservée.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/France_road_sign_B45a.svg",
  },
  {
    code: "B49",
    name: "Fin d'obligation d'allumage des feux",
    description:
      "Le panneau B49 signale la fin de l'obligation d'allumer les feux pour les automobilistes. De forme ronde (panneau de type police), il clôt une prescription en sortie de zone à visibilité réduite ou de tronçons spécifiques.",
    type: "obligation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/France_road_sign_B49.svg",
  },

  // ===== LOCALISATION =====
  {
    code: "EB10",
    name: "Entrée d'agglomération",
    description:
      "Le panneau d'entrée de ville EB10 est un panneau de localisation routière destiné à signaler aux conducteurs qu'ils pénètrent dans une agglomération.",
    type: "localisation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/France_road_sign_EB10.svg",
  },
  {
    code: "EB20",
    name: "Sortie d'agglomération",
    description:
      "Le panneau EB20 permet de signaler clairement la sortie d'une agglomération. De forme rectangulaire blanche barrée d'un listel rouge, il informe efficacement les automobilistes et les piétons qu'ils quittent la commune et sortent du régime de circulation en agglomération.",
    type: "localisation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/France_road_sign_EB20.svg",
  },
  {
    code: "D21a",
    name: "Direction et distance (1 ligne)",
    description:
      "Le panneau D21a est un panneau de position routier destiné à indiquer une direction et une distance. Il se présente sous la forme d'un panneau directionnel avec une flèche orientée, permettant aux usagers de la route d'identifier clairement la destination à atteindre ainsi que la distance correspondante.",
    type: "localisation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/France_road_sign_D21a.svg",
  },
  {
    code: "D29",
    name: "Direction vers les lieux-dits",
    description:
      "Le panneau de direction vers les lieux-dits type D29 permet d'indiquer clairement l'orientation vers une ferme, un hameau ou un lieu-dit. Utilisé sur les voies communales, routes rurales ou chemins d'accès, ce panneau d'indication directionnelle améliore la lisibilité des itinéraires.",
    type: "localisation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/France_road_sign_D29a.svg",
  },

  // ===== INFORMATION (Type CE) =====
  {
    code: "CE1",
    name: "Poste de secours",
    description:
      "Ce panneau Poste de secours CE1 permet d'indiquer clairement la localisation d'un poste de secours dans un environnement routier, urbain ou privé. Ce panneau routier d'indication est conçu pour guider efficacement les usagers vers un point d'assistance ou de premiers secours.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/France_road_sign_CE1.svg",
  },
  {
    code: "CE2a",
    name: "Poste d'appel d'urgence SOS",
    description:
      "Ce panneau Poste d'appel d'urgence SOS CE2a permet de signaler clairement la présence d'un dispositif d'appel d'urgence sur un axe routier, un site public ou privé. Le panneau routier Poste d'appel d'urgence SOS est destiné à guider les usagers vers un point d'appel d'urgence en cas de besoin.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/France_road_sign_CE2a.svg",
  },
  {
    code: "CE3a",
    name: "Office de tourisme",
    description:
      "Le panneau d'indication Office de tourisme est destiné à informer les automobilistes et visiteurs de la présence d'un service d'information touristique à proximité. Il facilite l'orientation des touristes vers les lieux d'accueil et de renseignement.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/France_road_sign_CE3a.svg",
  },
  {
    code: "CE4a",
    name: "Camping pour tentes",
    description:
      "Le panneau d'indication Camping pour tentes est destiné à orienter les usagers de la route vers des terrains de camping spécifiquement aménagés pour l'installation de tentes. Il est particulièrement adapté aux zones touristiques, rurales ou naturelles accueillant des campeurs.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/France_road_sign_CE4a.svg",
  },
  {
    code: "CE4b",
    name: "Camping pour caravanes",
    description:
      "Le panneau d'indication Camping pour caravanes est conçu pour orienter les usagers de la route vers des aires et terrains de camping destinés aux caravanes et camping-cars. Il s'intègre parfaitement aux zones touristiques, rurales ou périurbaines.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/France_road_sign_CE4b.svg",
  },
  {
    code: "CE004",
    name: "Point de rassemblement",
    description:
      "Le panneau routier Point de rassemblement – CE004 permet d'identifier clairement une zone de regroupement des personnes en cas d'évacuation ou de situation d'urgence. Le panneau Point de rassemblement est un élément essentiel de la signalisation de sécurité.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/France_road_sign_CE4.svg",
  },
  {
    code: "CE14",
    name: "Installations accessibles aux personnes handicapées",
    description:
      "Ce panneau routier d'indication CE14 est conçu pour informer efficacement les usagers de la présence d'installations accessibles aux personnes à mobilité réduite. Il s'intègre parfaitement dans les environnements urbains, les parkings, les zones publiques ou privées nécessitant une signalisation claire et normalisée.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/France_road_sign_CE14.svg",
  },
  {
    code: "CE15",
    name: "Station-service",
    description: "Indique la proximité d'une station-service.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/France_road_sign_CE15b.svg",
  },
  {
    code: "CE15I",
    name: "Recharge véhicule électrique",
    description:
      "Ce panneau routier d'indication CE15I est destiné à informer les usagers de la présence de bornes ou d'infrastructures de recharge pour véhicules électriques. Il est spécifiquement conçu pour une implantation sur les aires de service d'autoroute ou sur les routes à chaussées séparées.",
    type: "information",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/France_road_sign_CE15h.svg",
  },

  // ===== PANONCEAUX (Type M) =====
  {
    code: "M1",
    name: "Panonceau de distance",
    description:
      "Le panonceau M1 est un panonceau de signalisation complémentaire utilisé pour indiquer la distance séparant le panneau principal de la zone d'application effective de la prescription ou du danger signalé. Il est positionné immédiatement sous un panneau de signalisation (ex. : A2b – ralentisseur, B14 – limitation de vitesse, A13b – passage piétons).",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/France_road_sign_M1.svg",
  },
  {
    code: "M2",
    name: "Panonceau d'étendue",
    description:
      "Le panonceau M2 est un panonceau de signalisation complémentaire utilisé pour indiquer qu'un danger ou une prescription s'applique sur une certaine distance. L'exemple illustré mentionne une étendue de 500 mètres, signalée par deux flèches verticales encadrant la valeur.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/France_road_sign_M2.svg",
  },
  {
    code: "M5a",
    name: "Stop + distance pour panneau AB3",
    description:
      "Le panonceau M5a est un élément complémentaire de signalisation placé sous un panneau AB3 – Cédez le passage / Stop afin d'indiquer la distance restant à parcourir avant l'intersection où s'applique l'arrêt obligatoire. Il permet aux conducteurs d'anticiper leur freinage et leur positionnement sur la chaussée.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/France_road_sign_M5a.svg",
  },
  {
    code: "M5b",
    name: "Stop + distance pour panneau de danger type A",
    description:
      "Le panonceau M5b est un panonceau réglementaire utilisé en complément d'un panneau de danger de type A (triangle rouge sur fond blanc) afin de signaler à l'usager la distance à laquelle il devra s'arrêter à un Stop. Cette indication permet une meilleure anticipation et améliore la sécurité routière.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/France_road_sign_M5b.svg",
  },
  {
    code: "M6h",
    name: "Stationnement réservé aux personnes handicapées",
    description:
      "Le panonceau M6h est un élément de signalisation réglementaire indiquant qu'une place de stationnement est réservée aux personnes titulaires d'une carte de stationnement pour handicapé. Placé sous un panneau de stationnement (type B6 ou B29), il permet d'identifier clairement les emplacements accessibles.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/France_road_sign_M6h.svg",
  },
  {
    code: "M6i",
    name: "Interdit sauf véhicules électriques",
    description:
      "Le panonceau M6i est un accessoire de signalisation réglementaire indiquant que le stationnement est réservé exclusivement aux véhicules électriques. Installé sous un panneau de stationnement (type B6), il précise la restriction et permet de faciliter la gestion des emplacements dédiés à la recharge.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/France_road_sign_M6i.svg",
  },
  {
    code: "M8c",
    name: "De part et d'autre du panneau",
    description:
      "Le panonceau M8c indique que la prescription du panneau principal, souvent un panneau de stationnement type B6 (stationnement interdit, arrêt et stationnement interdits, etc.), s'applique dans les deux directions à partir de l'emplacement du panneau.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/France_road_sign_M8c.svg",
  },
  {
    code: "M8f",
    name: "De part et d'autre pour panneau de stationnement",
    description:
      "Le panonceau M8f – De part et d'autre est un complément de signalisation utilisé sous un panneau de stationnement type B6 pour indiquer que la prescription ou la restriction s'applique des deux côtés du panneau.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/France_road_sign_M8f.svg",
  },
  {
    code: "M9c",
    name: "Cédez le passage pour panneau AB3",
    description:
      "Le panonceau M9c est un élément complémentaire de signalisation placé sous un panneau AB3 – Cédez le passage afin de confirmer ou préciser la prescription. Il rappelle aux usagers qu'ils doivent laisser la priorité aux véhicules venant de la voie principale avant de s'engager.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/France_road_sign_M9c.svg",
  },
  {
    code: "M9z",
    name: "Rappel",
    description:
      "Le panonceau M9z, portant la mention « RAPPEL », est un panonceau de signalisation complémentaire utilisé pour rappeler une prescription déjà en vigueur, notamment une limitation de vitesse ou une interdiction. Il se place immédiatement sous un panneau de prescription (ex. : B14 – limitation de vitesse) pour en réaffirmer l'application.",
    type: "panonceaux",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/France_road_sign_M9z.svg",
  },
];
