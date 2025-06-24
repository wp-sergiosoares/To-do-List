import React from "react";

export default function TicketItem({ item, onToggle }) {
  return (
    <div
      className={
        item.bought
          ? "flex-1 cursor-pointer line-through decoration-1 text-[var(--color-text-secondary)] dark:text-gray-400 text-lg"
          : "flex-1 hover:line-through cursor-pointer hover:text-[var(--color-text-secondary)] dark:text-gray-200 text-lg text-[var(--color-text-primary)]"
      }
      onClick={() => onToggle(item.id)}
    >
      {item.item}{" "}
    </div>
  );
}
