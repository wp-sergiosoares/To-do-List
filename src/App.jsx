import "./App.css";
import { useEffect, useState } from "react";
import { ListTodo } from "lucide-react";

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
    if (filtro === "comprados") return item.bought;
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
      <div className="max-w-xl mx-auto">
        <div className="mx-4 bg-gray-200 my-10 pb-2 shadow-xl rounded-b-lg">
          <div className="rounded-t-lg p-4 flex gap-2 items-center bg-[var(--color-primary)] justify-center">
            <ListTodo size={28} className=" text-[var(--color-secondary)]" />
            <h1 className="text-xl text-[var(--color-secondary)] font-mono font-bold">
              Lista de Tarefas
            </h1>
          </div>
          <div className="p-6 space-y-4">
            <AddTicket onAdd={addItem} />
            <Filters setFiltro={setFiltro} />
            <TicketList
              items={itensFiltrados}
              onRemove={removeItem}
              onToggle={marcaConcluido}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
