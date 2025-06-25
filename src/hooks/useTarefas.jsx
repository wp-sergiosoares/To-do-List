import { useEffect, useState } from "react";

export default function useTarefas() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return parsed.sort((a, b) => Number(a.bought) - Number(b.bought));
  });
  const [nrConcluidas, setNrConcluidas] = useState(0);
  const [nrPendentes, setNrPendentes] = useState(0);
  const [filtro, setFiltro] = useState("todos");

  // Atualiza o localStorage sempre que 'items' mudar
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    setNrConcluidas(items.filter((item) => item.bought).length);
    setNrPendentes(items.filter((item) => !item.bought).length);
  }, [items]);

  const itensFiltrados = [...items].filter((item) => {
    if (filtro === "todos") return true;
    if (filtro === "concluidos") return item.bought;
    if (filtro === "pendentes") return !item.bought;
    if (filtro === "destaque") return item.emDestaque;
  });

  // const porDestaque = itensFiltrados.sort(
  //   (a, b) => a.emDestaque - b.emDestaque
  // );

  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      item,
      bought: false,
      emDestaque: false,
    };
    setItems([newItem, ...items]);
    console.log(items);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleFavorite = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, emDestaque: !item.emDestaque } : item
      )
    );
  };

  const marcaConcluido = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return {
    marcaConcluido,
    removeItem,
    addItem,
    itensFiltrados,
    nrConcluidas,
    nrPendentes,
    setNrConcluidas,
    setNrPendentes,
    filtro,
    setFiltro,
    handleFavorite,
  };
}
