type FiltersProps = {
  setFiltro: (filtro: "todos" | "concluidos" | "pendentes") => void;
};

export default function Filters({ setFiltro }: FiltersProps) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button className="btn-filter" onClick={() => setFiltro("todos")}>
            Todas
          </button>
        </div>
        <div>
          <button
            className="btn-filter"
            onClick={() => setFiltro("concluidos")}
          >
            Concluídas
          </button>
        </div>
        <div>
          <button onClick={() => setFiltro("pendentes")} className="btn-filter">
            Pendentes
          </button>
        </div>
      </div>
    </div>
  );
}
