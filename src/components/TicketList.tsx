import { Trash2 } from "lucide-react";

type Item = {
  id: string | number;
  item: string;
  bought: boolean;
};

type TicketListProps = {
  items: Item[];
  onRemove: (id: string | number) => void;
  onToggle: (id: string | number) => void;
  filtro: "todos" | "concluidos" | "ativos";
};

export default function TicketList({
  items,
  onRemove,
  onToggle,
  filtro,
  diasDesde,
}: TicketListProps) {
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
                {/* <span className="text-gray-300 text-sm italic tracking-wide">
                  {diasDesde(item.id)}
                </span> */}
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
