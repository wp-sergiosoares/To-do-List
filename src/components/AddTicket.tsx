import { useState } from "react";
import { Input } from "@/components/ui/input";

type AddTicketProps = {
  onAdd: (item: string) => void;
};

export default function AddTicket({ onAdd }: AddTicketProps) {
  const [item, setItem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <Input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border-2 border-[var(--color-primary)] py-6 px-4 flex-1 rounded-full bg-white text-[var(--color-primary)] pr-30"
          />
          <button className="absolute right-[3px] bg-[var(--color-primary)] text-white py-3 px-4 rounded-full hover:bg-[var(--color-primary-hover)] cursor-pointer text-sm tracking-wider transition">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}
