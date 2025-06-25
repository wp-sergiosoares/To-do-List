import { useEffect, useRef, useState } from "react";

type AddTicketProps = {
  onAdd: (item: string) => void;
};

export default function AddTicket({ onAdd }: AddTicketProps) {
  const [item, setItem] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item.trim() === "") return;
    onAdd(item.trim());
    setItem("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 3. Dá foco no input ao montar
    }
  }, []); // 2. Corre apenas uma vez (montagem)

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-between"
    >
      <div className="relative flex items-center justify-between w-full">
        <input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={item}
          ref={inputRef}
          onChange={(e) => setItem(e.target.value)}
          className="input-adicionar"
        />
        <button className="absolute right-[3px] bg-[var(--color-primary)] text-white py-3 px-4 rounded-full hover:bg-[var(--color-primary-hover)] cursor-pointer text-sm tracking-wider transition font-[Nunito]">
          Adicionar
        </button>
      </div>
    </form>
  );
}
