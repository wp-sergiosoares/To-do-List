import { Star } from "lucide-react";

export default function ItemBtnFavorite({ isFavorite, item }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => isFavorite(item.id)}
        className="cursor-pointer p-1"
      >
        <Star
          size={18}
          className={`text-[var(--color-primary)] transition-all duration-500 ${
            item.emDestaque
              ? "scale-100 fill-[var(--color-primary)] text-[var(--color-primary)]"
              : "scale-95 text-[var(--color-primary-light)] dark:opacity-50"
          }`}
        />
      </button>
    </div>
  );
}
