import { useContext } from "react";

import BtnFavorite from "../Buttons/Favorite";
import BtnRemove from "../Buttons/Delete";
import Item from "./Item";

import { TarefasContext } from "../../context/tarefasContext";

export default function List() {
  const { itensFiltrados, removeItem, marcaConcluido, filtro, handleFavorite } =
    useContext(TarefasContext);

  console.log(itensFiltrados);

  return (
    <div>
      {itensFiltrados.length > 0 ? (
        <ul className="space-y-1">
          {itensFiltrados.map((item) => (
            <div key={item.id} className="item">
              <Item item={item} onToggle={marcaConcluido} />
              <div className="flex items-center justify-center gap-1">
                <BtnFavorite item={item} isFavorite={handleFavorite} />
                <BtnRemove item={item} onRemove={removeItem} />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-500 italic text-center">
          {filtro === "concluidos"
            ? "Sem tarefas concluídas"
            : filtro === "ativos"
            ? "Sem tarefas ativas"
            : filtro === "destaque"
            ? "Sem destaques"
            : "Nenhuma tarefa disponível"}
        </p>
      )}
    </div>
  );
}
