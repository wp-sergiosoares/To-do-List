import { Trash2 } from "lucide-react";

export default function ItemBtnDelete({ onRemove, item }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => onRemove(item.id)}
        className="text-[var(--color-secondary)] cursor-pointer p-1"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
