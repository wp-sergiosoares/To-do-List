import { useContext } from "react";
import { Star } from "lucide-react";

import { TarefasContext } from "../../context/TarefasContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Filters() {
  const { setFiltro, filtro } = useContext(TarefasContext);

  useGSAP(() => {
    gsap.fromTo(
      ".filters",
      {
        y: -10,
        autoAlpha: 0,
      },
      {
        y: 0,
        delay: 0.5,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div>
      <div className="filters flex gap-1 items-center justify-center">
        <div>
          <button
            className={
              filtro === "todos"
                ? "btn-filter bg-[var(--color-primary-light)]! dark:bg-[var(--color-primary)]! dark:border-0! dark:text-white!"
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
                ? "btn-filter bg-[var(--color-primary-light)]! dark:bg-[var(--color-primary)]! dark:border-0! dark:text-white!"
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
                ? "btn-filter bg-[var(--color-primary-light)]! dark:bg-[var(--color-primary)]! dark:border-0! dark:text-white!"
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
                ? "btn-filter bg-[var(--color-primary-light)]! dark:bg-[var(--color-primary)]! dark:border-0! dark:text-white! p-2!"
                : "btn-filter p-2!"
            }
          >
            <Star
              size={18}
              // className="fill-[var(--color-primary)] text-[var(--color-primary)] dark:fill-white dark:text-white"

              className={
                filtro === "destaque"
                  ? "dark:fill-white dark:text-white text-[var(--color-primary)] fill-[var(--color-primary)]"
                  : "text-[var(--color-primary)] fill-[var(--color-primary)] "
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
