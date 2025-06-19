import { Trash2 } from "lucide-react";

export default function TicketList({ items, onRemove, onToggle, filtro }) {
  console.log(items);
  return (
    <div>
      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="border-1 border-gray-200 flex gap-2 items-center justify-between bg-white rounded-lg py-3 px-4 shadow-xs"
            >
              <div
                className={
                  item.bought
                    ? "flex-1 cursor-pointer line-through decoration-1 text-[var(--color-text-secondary)] text-lg"
                    : "flex-1 hover:line-through cursor-pointer hover:text-[var(--color-text-secondary)] text-lg text-[var(--color-text-primary)]"
                }
                onClick={() => onToggle(item.id)}
              >
                {item.item}
              </div>
              <div className="flex items-center justify-center">
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
      ) : (
        <p className="text-lg text-gray-500 italic text-center">
          {filtro === "concluidos"
            ? "Sem tarefas concluídas"
            : filtro === "ativos"
            ? "Sem tarefas ativas"
            : "Nenhuma tarefa disponível"}
        </p>
      )}
    </div>
  );
}
