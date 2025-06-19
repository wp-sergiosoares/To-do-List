import "./App.css";
import { useEffect, useState } from "react";
import { ClockFading } from "lucide-react";

import AddTicket from "./components/AddTicket";
import TicketList from "./components/TicketList";
import Filters from "./components/Filters";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });
  const [filtro, setFiltro] = useState("todos");

  // Atualiza o localStorage sempre que 'todos' mudar
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const itensFiltrados = items.filter((item) => {
    if (filtro === "todos") return true; // mostra tudo
    if (filtro === "concluidos") return item.bought;
    if (filtro === "pendentes") return !item.bought;
  });

  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      item,
      bought: false,
    };
    setItems([newItem, ...items]);
  };

  const removeItem = (id) => {
    // rmeove da lista
    setItems(items.filter((item) => item.id !== id));
  };

  const marcaConcluido = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container max-w-2xl mx-auto w-full">
          <div className="space-y-4 p-4">
            <AddTicket onAdd={addItem} />
            <Filters setFiltro={setFiltro} />
          </div>

          <div className="mx-4 bg-gray-200 my-5 shadow-xl rounded-b-lg">
            <div className="rounded-t-lg py-4 px-6 flex gap-2 items-center justify-between bg-[var(--color-primary)]">
              <h1 className="text-xl text-white font-mono font-bold">
                Lista de Tarefas
              </h1>
              <ClockFading
                size={28}
                className=" text-[var(--color-secondary)]"
              />
            </div>
            <div className="p-4 space-y-4">
              <TicketList
                items={itensFiltrados}
                onRemove={removeItem}
                onToggle={marcaConcluido}
                filtro={filtro}
              />
            </div>
          </div>
          <div className="text-center italic text-gray-500 text-sm">
            Desenvolvido por{" "}
            <a
              href="https://portfolio-two-peach-25.vercel.app/"
              target="_blank"
              className="underline hover:text-black"
            >
              Sérgio Soares
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
