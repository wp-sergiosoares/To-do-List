import React from "react";

type Item = {
  id: string | number;
  item: string;
  bought: boolean;
  emDestaque: boolean;
};

type ItemProps = {
  item: Item;
  onToggle: (id: string | number) => void;
};

export default function Item({ item, onToggle }: ItemProps) {
  return (
    <div
      className={`flex-1 cursor-pointer text-lg
        ${
          item.bought
            ? "line-through decoration-2 text-[var(--color-text-secondary)] dark:text-gray-400"
            : "hover:text-[var(--color-text-secondary)] dark:text-gray-200 text-[var(--color-text-primary)]"
        }`}
      onClick={() => onToggle(item.id)}
    >
      {item.item}
    </div>
  );
}
