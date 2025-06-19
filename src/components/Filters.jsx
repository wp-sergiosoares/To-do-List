export default function Filters({ setFiltro }) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button
            className="rounded-full text-[var(--color-text-secondary)] px-2 py-1 text-sm cursor-pointer bg-gray-100 hover:bg-gray-300 transition"
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
        </div>
        <div>
          <button
            className="rounded-full text-[var(--color-text-secondary)] px-2 py-1 text-sm cursor-pointer bg-gray-100 hover:bg-gray-300 transition"
            onClick={() => setFiltro("concluidos")}
          >
            Concluídos
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("pendentes")}
            className="rounded-full text-[var(--color-text-secondary)] px-2 py-1 text-sm cursor-pointer bg-gray-100 hover:bg-gray-300 transition"
          >
            Pendentes
          </button>
        </div>
      </div>
    </div>
  );
}
