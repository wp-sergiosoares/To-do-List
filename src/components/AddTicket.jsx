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
    <div className="px-4">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center justify-between"
      >
        <input
          type="text"
          placeholder="Digite um item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border-1 border-gray-500 p-2 flex-1 bg-white"
        />
        <button className="bg-blue-500 text-white w-40 p-2">Adicionar</button>
      </form>
    </div>
  );
}
