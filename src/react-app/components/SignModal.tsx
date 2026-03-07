import { X } from "lucide-react";
import type { RoadSign } from "@/data/signs";
import { signTypes } from "@/data/signTypes";

interface SignModalProps {
  sign: RoadSign;
  isOpen: boolean;
  onClose: () => void;
}

export default function SignModal({ sign, isOpen, onClose }: SignModalProps) {
  if (!isOpen) return null;

  const signType = signTypes.find((t) => t.id === sign.type);
  const emoji = signType?.icon || "🚦";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md h-[600px] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>

            <div className="flex flex-col align-middle justify-center">
              <span className="font-bold text-lg leading-tight">
                {sign.name}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* CONTENT (scrollable) */}
        <div className="flex-1 overflow-y-auto">
          {/* Image */}
          <div className="bg-gradient-to-b from-secondary/50 to-card p-6 flex items-center justify-center">
            <img
              src={sign.imageUrl}
              alt={sign.name}
              className="max-w-48 max-h-48 object-contain drop-shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "";
                (e.target as HTMLImageElement).alt = "Image non disponible";
              }}
            />
          </div>

          {/* Text */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              {sign.name}
            </h2>
            <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
              {sign.code} - {sign.type}
            </span>
            <p className="text-muted-foreground leading-relaxed">
              {sign.description}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
