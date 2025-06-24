import React from "react";
import { Trash2 } from "lucide-react";

type Item = {
  id: string | number;
  item: string;
  bought: boolean;
  emDestaque: boolean;
};

type BtnRemoveProps = {
  item: Item;
  onRemove: (id: string | number) => void;
};

export default function BtnRemote({ item, onRemove }: BtnRemoveProps) {
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
