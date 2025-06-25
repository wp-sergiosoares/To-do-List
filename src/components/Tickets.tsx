import BtnFavorite from "./BtnFavorite";
import BtnRemove from "./BtnRemove";
import TicketItem from "./TicketItem";

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

export default function Tickets({
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
              <TicketItem item={item} onToggle={onToggle} />
              <div className="flex items-center justify-center gap-1">
                <BtnFavorite item={item} isFavorite={isFavorite} />
                <BtnRemove item={item} onRemove={onRemove} />
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
