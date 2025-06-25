import { useContext } from "react";
import { TarefasContext } from "../context/tarefasContext";

import AddTicket from "../components/Tickets/Add";
import List from "../components/Tickets/List";
import Filters from "../components/Tickets/Filters";
import Header from "../components/Header/Header";
import TaskCount from "../components/Tickets/TaskCount";
import Footer from "../components/Footer/Footer";

export default function Home() {
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
  } = useContext(TarefasContext);

  return (
    <>
      <div className="mt-7.5">
        <div className="container max-w-2xl mx-auto w-full">
          <div className="space-y-6 px-4 mb-12">
            <Header />
            <AddTicket onAdd={addItem} />
            <Filters setFiltro={setFiltro} filtro={filtro} />
          </div>

          <div className="px-4 space-y-4">
            <List
              items={itensFiltrados}
              onRemove={removeItem}
              onToggle={marcaConcluido}
              filtro={filtro}
              isFavorite={handleFavorite}
            />
          </div>

          <TaskCount nrConcluidas={nrConcluidas} nrPendentes={nrPendentes} />
          <Footer />
        </div>
      </div>
    </>
  );
}
