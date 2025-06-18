export default function Filters({ setFiltro }) {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div>
          <button
            className="rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-primary)]"
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
        </div>
        <div>
          <button
            className="rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-primary)]"
            onClick={() => setFiltro("comprados")}
          >
            Concluídos
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("pendentes")}
            className="rounded-full text-white px-2 py-1 text-sm cursor-pointer bg-[var(--color-primary)]"
          >
            Pendentes
          </button>
        </div>
      </div>
    </div>
  );
}
