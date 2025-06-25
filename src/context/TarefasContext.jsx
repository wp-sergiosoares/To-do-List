import React, { createContext } from "react";
import useTarefas from "../hooks/useTarefas";

// 1️⃣ Criamos o Context
export const TarefasContext = createContext();

// 2️⃣ Criamos o Provider
export const TarefasProvider = ({ children }) => {
  const {
    marcaConcluido,
    removeItem,
    addItem,
    itensFiltrados,
    nrConcluidas,
    nrPendentes,
    filtro,
    setFiltro,
    handleFavorite,
  } = useTarefas();

  return (
    <TarefasContext.Provider
      value={{
        marcaConcluido,
        removeItem,
        addItem,
        itensFiltrados,
        nrConcluidas,
        nrPendentes,
        filtro,
        setFiltro,
        handleFavorite,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
};
