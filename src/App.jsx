import "./App.css";

import AddTicket from "./components/AddTicket";
import TicketList from "./components/TicketList";
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
  } = useTarefas();

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
          <Creditos />
        </div>
      </div>
    </>
  );
}

export default App;
