export default function TicketList({ items, onRemove, onToggle }) {
  console.log(items);
  return (
    <div className="px-4">
      {items.length > 0 && (
        <ul className="space-y-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 items-center justify-between"
            >
              <div
                className={
                  item.bought
                    ? "line-through decoration-1 text-gray-400 flex-1 p-2"
                    : "flex-1 p-2 hover:line-through cursor-pointer hover:text-gray-400"
                }
                onClick={() => onToggle(item.id)}
              >
                {item.item}
              </div>
              <div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-red-500 cursor-pointer"
                >
                  remover
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
