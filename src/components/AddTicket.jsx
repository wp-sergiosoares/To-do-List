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
        <input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="outline-2 outline-[var(--color-secondary)] py-2 px-4 flex-1 bg-white rounded-full"
        />
      </form>
    </div>
  );
}
