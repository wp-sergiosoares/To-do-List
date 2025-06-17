import { Trash2 } from "lucide-react";

export default function TicketList({ items, onRemove, onToggle }) {
  console.log(items);
  return (
    <div>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 items-center justify-between bg-white rounded-full py-2 px-4 "
            >
              <div
                className={
                  item.bought
                    ? "cursor-pointer line-through decoration-1 text-[var(--color-text-secondary)] text-lg"
                    : "hover:line-through cursor-pointer hover:text-[var(--color-text-secondary)] text-lg text-[var(--color-text-primary)]"
                }
                onClick={() => onToggle(item.id)}
              >
                {item.item}
              </div>
              <div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-[var(--color-danger)] cursor-pointer"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
