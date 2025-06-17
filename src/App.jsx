import "./App.css";
import AddTicket from "./components/AddTicket";

import { ShoppingBasket } from "lucide-react";
import TicketList from "./components/TicketList";

import { useState } from "react";
import Filters from "./components/Filters";

function App() {
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState("todos");

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

  // setItems(items.map(item => item.id === id ? { ...item, bought: !item.bought } : item));

  return (
    <>
      <div className="max-w-xl mx-auto bg-gray-200 my-10 space-y-2 pb-2">
        <div className="p-4 flex gap-4 items-center bg-gray-400">
          <ShoppingBasket size={32} />
          <h1 className="text-xl">Lista de Compras Interativa</h1>
        </div>
        <AddTicket onAdd={addItem} />
        <TicketList
          items={itensFiltrados}
          onRemove={removeItem}
          onToggle={marcaConcluido}
        />
        <Filters setFiltro={setFiltro} />
      </div>
    </>
  );
}

export default App;
