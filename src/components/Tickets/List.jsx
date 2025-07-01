import { useContext } from "react";

import { TarefasContext } from "../../context/TarefasContext";

import ItemRoot from "./Item/ItemRoot";
import ItemContent from "./Item/ItemContent";
import ItemBtnDelete from "./Item/ItemBtnDelete";
import ItemBtnFavorite from "./Item/ItemBtnFavorite";
import ItemActions from "./Item/ItemActions";
import NoContent from "./NoContent";

export default function List() {
  const { itensFiltrados, removeItem, marcaConcluido, handleFavorite } =
    useContext(TarefasContext);

  return (
    <div className="px-4 space-y-4">
      {itensFiltrados.length > 0 ? (
        <ul className="space-y-1">
          {itensFiltrados.map((item) => (
            <ItemRoot key={item.id} id={item.id}>
              <ItemContent item={item} onToggle={marcaConcluido} />
              <ItemActions>
                {!item.bought ? (
                  <ItemBtnFavorite isFavorite={handleFavorite} item={item} />
                ) : null}

                <ItemBtnDelete onRemove={removeItem} item={item} />
              </ItemActions>
            </ItemRoot>
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </div>
  );
}
