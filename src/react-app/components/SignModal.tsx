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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Image section */}
        <div className="bg-gradient-to-b from-secondary/50 to-card p-8 pb-2 flex items-center justify-center">
          <img
            src={sign.imageUrl}
            alt={sign.name}
            className="max-w-45 max-h-45 object-contain drop-shadow-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "";
              (e.target as HTMLImageElement).alt = "Image non disponible";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
              {sign.code}
            </span>
            {signType && (
              <span
                className={`text-xs font-medium text-white px-2.5 py-1 rounded-lg ${signType.color}`}
              >
                {signType.name}
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-foreground mb-2">
            {sign.name}
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {sign.description}
          </p>
        </div>
      </div>
    </div>
  );
}
