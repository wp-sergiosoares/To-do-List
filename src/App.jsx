import "./App.css";
import { useEffect, useState } from "react";

import AddTicket from "./components/AddTicket";
import TicketList from "./components/TicketList";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ContagemTarefas from "./components/ContagemTarefas";

// id, item, bought

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });
  const [nrConcluidas, setNrConcluidas] = useState("");
  const [nrPendentes, setNrPendentes] = useState("");
  const [filtro, setFiltro] = useState("todos");

  // Atualiza o localStorage sempre que 'todos' mudar
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));

    const filtraConcluidas = items.filter((item) => item.bought);
    setNrConcluidas(filtraConcluidas.length);
    const filtraPendentes = items.filter((item) => !item.bought);
    setNrPendentes(filtraPendentes.length);
  }, [items]);

  const itensFiltrados = [...items]
    .sort((a, b) => a.bought - b.bought)
    .filter((item) => {
      if (filtro === "todos") return true;
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
      <div className="mt-10 ">
        <div className="container max-w-2xl mx-auto w-full">
          <Header />
          <div className="space-y-4 p-4">
            <AddTicket onAdd={addItem} />
            <Filters setFiltro={setFiltro} />
          </div>
          <div>
            <div className="p-4 space-y-4">
              <TicketList
                items={itensFiltrados}
                onRemove={removeItem}
                onToggle={marcaConcluido}
                filtro={filtro}
              />
            </div>
          </div>
          <ContagemTarefas
            nrConcluidas={nrConcluidas}
            nrPendentes={nrPendentes}
          />
          <div>
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
      </div>
    </>
  );
}

export default App;
