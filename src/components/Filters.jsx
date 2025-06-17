export default function Filters({ setFiltro }) {
  return (
    <div className="px-4">
      <div className="flex gap-2 items-center">
        <div className="text-sm">Filtros: </div>
        <div>
          <button
            className="rounded-full bg-gray-400 px-2 py-1 text-sm cursor-pointer"
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>
        </div>
        <div>
          <button
            className="rounded-full bg-gray-400 px-2 py-1 text-sm cursor-pointer"
            onClick={() => setFiltro("comprados")}
          >
            Comprados
          </button>
        </div>
        <div>
          <button
            onClick={() => setFiltro("pendentes")}
            className="rounded-full bg-gray-400 px-2 py-1 text-sm cursor-pointer"
          >
            Pendentes
          </button>
        </div>
      </div>
    </div>
  );
}
