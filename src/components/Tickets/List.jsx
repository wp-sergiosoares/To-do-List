import { useContext, useRef } from "react";

import { TarefasContext } from "../../context/TarefasContext";

import ItemRoot from "./Item/ItemRoot";
import ItemContent from "./Item/ItemContent";
import ItemBtnDelete from "./Item/ItemBtnDelete";
import ItemBtnFavorite from "./Item/ItemBtnFavorite";
import ItemActions from "./Item/ItemActions";
import NoContent from "./NoContent";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function List() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".item",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          y: -10,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1)",
          delay: 0.5,
        }
      );
    },
    { scope: container }
  );

  const { itensFiltrados, removeItem, marcaConcluido, handleFavorite } =
    useContext(TarefasContext);

  return (
    <div className="px-4 space-y-4">
      {itensFiltrados.length > 0 ? (
        <ul className="space-y-1" ref={container}>
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
