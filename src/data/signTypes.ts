export interface SignType {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export const signTypes: SignType[] = [
  {
    id: "interdiction",
    name: "Interdiction et fin d'interdiction",
    description: "Panneaux indiquant une interdiction ou la fin d'une interdiction",
    color: "bg-red-500",
    icon: "🚫",
  },
  {
    id: "stationnement",
    name: "Stationnement",
    description: "Panneaux relatifs au stationnement des véhicules",
    color: "bg-blue-600",
    icon: "🅿️",
  },
  {
    id: "indication",
    name: "Indication",
    description: "Panneaux donnant des indications utiles à la conduite",
    color: "bg-blue-500",
    icon: "ℹ️",
  },
  {
    id: "intersection",
    name: "Intersection et priorité",
    description: "Panneaux relatifs aux intersections et règles de priorité",
    color: "bg-amber-500",
    icon: "⚠️",
  },
  {
    id: "danger",
    name: "Danger",
    description: "Panneaux signalant un danger sur la route",
    color: "bg-amber-400",
    icon: "⚠️",
  },
  {
    id: "obligation",
    name: "Obligation et fin d'obligation",
    description: "Panneaux indiquant une obligation ou la fin d'une obligation",
    color: "bg-blue-600",
    icon: "⭕",
  },
  {
    id: "localisation",
    name: "Localisation",
    description: "Panneaux indiquant les lieux et directions",
    color: "bg-green-600",
    icon: "📍",
  },
  {
    id: "information",
    name: "Information",
    description: "Panneaux d'information générale",
    color: "bg-blue-400",
    icon: "📋",
  },
  {
    id: "panonceaux",
    name: "Panonceaux",
    description: "Panneaux additionnels complétant un panneau principal",
    color: "bg-slate-500",
    icon: "📝",
  },
];
