import { useState } from "react";
import type { RoadSign } from "@/data/signs";
import SignModal from "./SignModal";

interface SignCardProps {
  sign: RoadSign;
}

export default function SignCard({ sign }: SignCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex flex-col items-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 text-left"
      >
        <div className="w-20 h-20 mb-3 flex items-center justify-center">
          {!imageError ? (
            <img
              src={sign.imageUrl}
              alt={sign.name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-200"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
          )}
        </div>
        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mb-1">
          {sign.code} - {sign.type}
        </span>
        <h3 className="text-sm font-medium text-foreground text-center line-clamp-2">
          {sign.name}
        </h3>
      </button>

      <SignModal
        sign={sign}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
