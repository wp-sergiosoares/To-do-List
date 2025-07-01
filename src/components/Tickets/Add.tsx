import { useEffect, useRef, useState, useContext } from "react";

import { TarefasContext } from "../../context/tarefasContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AddTicket() {
  const { addItem } = useContext(TarefasContext);

  const [item, setItem] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item.trim() === "") return;
    addItem(item.trim());
    setItem("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 3. Dá foco no input ao montar
    }
  }, []); // 2. Corre apenas uma vez (montagem)

  useGSAP(() => {
    gsap.fromTo(
      ".form",
      {
        y: -10,
        autoAlpha: 0,
      },
      {
        y: 0,
        delay: 0.5,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex gap-2 items-center justify-between"
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
