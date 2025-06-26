import React from "react";

export default function ItemContent({ item, onToggle }) {
  return (
    <button
      onClick={() => onToggle(item.id)}
      type="button"
      className={`flex-1 text-left text-lg cursor-pointer
    ${
      item.bought
        ? "line-through decoration-2 text-[var(--color-text-secondary)] dark:text-gray-400"
        : "text-[var(--color-text-primary)] dark:text-gray-200 hover:text-[var(--color-text-secondary)]"
    }`}
      aria-pressed={item.bought}
    >
      {item.item}
    </button>
  );
}
