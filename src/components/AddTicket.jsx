import { useState } from "react";

export default function AddTicket({ onAdd }) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === "") return;
    onAdd(item.trim());
    setItem("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center justify-between"
      >
        <div className="relative flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="outline-2 outline-[var(--color-secondary)] py-3 px-4 flex-1 bg-white rounded-full"
          />
          <button className="absolute right-1 bg-[var(--color-primary)] text-white py-3 px-4 rounded-full hover:bg-[var(--color-primary-hover)] cursor-pointer text-sm tracking-wider">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}
