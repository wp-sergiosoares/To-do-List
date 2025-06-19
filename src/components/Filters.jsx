export default function Filters({ setFiltro }) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button
            className="tracking-wider rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] transition"
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
        </div>
        <div>
          <button
            className="tracking-wider  rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] transition"
            onClick={() => setFiltro("concluidos")}
          >
            Concluídos
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("pendentes")}
            className="tracking-wider rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] transition"
          >
            Pendentes
          </button>
        </div>
      </div>
    </div>
  );
}
