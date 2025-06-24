type FiltersProps = {
  setFiltro: (
    filtro: "todos" | "concluidos" | "pendentes" | "destaque"
  ) => void;
};

export default function Filters({ setFiltro, filtro }: FiltersProps) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button
            className={
              filtro === "todos"
                ? "btn-filter bg-[var(--color-primary-light)]!"
                : "btn-filter"
            }
            onClick={() => setFiltro("todos")}
          >
            Todas
          </button>
        </div>
        <div>
          <button
            className={
              filtro === "concluidos"
                ? "btn-filter bg-[var(--color-primary-light)]!"
                : "btn-filter"
            }
            onClick={() => setFiltro("concluidos")}
          >
            Concluídas
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("pendentes")}
            className={
              filtro === "pendentes"
                ? "btn-filter bg-[var(--color-primary-light)]!"
                : "btn-filter"
            }
          >
            Pendentes
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("destaque")}
            className={
              filtro === "destaque"
                ? "btn-filter bg-[var(--color-primary-light)]!"
                : "btn-filter"
            }
          >
            Mais importantes
          </button>
        </div>
      </div>
    </div>
  );
}
