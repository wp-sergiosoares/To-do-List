import "./App.css";

import AddTicket from "./components/AddTicket";
import Tickets from "./components/Tickets";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ContagemTarefas from "./components/ContagemTarefas";
import Creditos from "./components/Creditos";

import useTarefas from "./hooks/useTarefas";

// id, item, bought

function App() {
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
    <>
      <div className="mt-7.5">
        <div className="container max-w-2xl mx-auto w-full">
          <div className="space-y-6 px-4 mb-12">
            <Header />
            <AddTicket onAdd={addItem} />
            <Filters setFiltro={setFiltro} filtro={filtro} />
          </div>

          <div className="px-4 space-y-4">
            <Tickets
              items={itensFiltrados}
              onRemove={removeItem}
              onToggle={marcaConcluido}
              filtro={filtro}
              isFavorite={handleFavorite}
            />
          </div>

          <ContagemTarefas
            nrConcluidas={nrConcluidas}
            nrPendentes={nrPendentes}
          />
          <Creditos />
        </div>
      </div>
    </>
  );
}

export default App;
