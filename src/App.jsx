import "./App.css";
import AddTicket from "./components/AddTicket";

import { ShoppingBasket } from "lucide-react";
import TicketList from "./components/TicketList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

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
    // 1. Criar um novo array baseado no atual
    const novosItens = items.map((itemAtual) => {
      // 2. Verificar se o item atual é o que queremos alterar
      if (itemAtual.id === id) {
        // 3. Se for, criar uma nova versão do item, com o campo 'bought' invertido
        const itemAtualizado = {
          ...itemAtual, // Copia todas as propriedades do item atual
          bought: !itemAtual.bought, // Inverte o valor atual de 'bought'
        };
        return itemAtualizado;
      } else {
        // 4. Se não for o item clicado, mantemos ele como está
        return itemAtual;
      }
    });

    // 5. Atualizar o estado com o novo array
    setItems(novosItens);
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
          items={items}
          onRemove={removeItem}
          onToggle={marcaConcluido}
        />
      </div>
    </>
  );
}

export default App;
