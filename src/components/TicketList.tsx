import { Trash2, ArrowUp, ArrowDown, Star } from "lucide-react";

type Item = {
  id: string | number;
  item: string;
  bought: boolean;
  emDestaque: boolean;
};

type TicketListProps = {
  items: Item[];
  onRemove: (id: string | number) => void;
  onToggle: (id: string | number) => void;
  isFavorite: (id: string | number) => void;
  filtro: "todos" | "concluidos" | "ativos" | "destaque";
};

export default function TicketList({
  items,
  onRemove,
  onToggle,
  filtro,
  isFavorite,
}: TicketListProps) {
  console.log(items);
  return (
    <div>
      {items.length > 0 ? (
        <ul className="space-y-1">
          {items.map((item) => (
            <div key={item.id} className="item">
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
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <button onClick={() => isFavorite(item.id)}>
                    {!item.emDestaque ? (
                      <Star
                        size={18}
                        className=" text-[var(--color-primary)]"
                      />
                    ) : (
                      <Star
                        size={18}
                        className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                      />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-[var(--color-secondary)] cursor-pointer"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
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
