import { Clock12, Check } from "lucide-react";

type ContagemTarefasProps = {
  nrConcluidas: number;
  nrPendentes: number;
};

import { useDarkMode } from "./../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export default function ContagemTarefas({
  nrConcluidas,
  nrPendentes,
}: ContagemTarefasProps) {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <div className="px-4">
        <div className="flex items-center justify-between">
          {nrConcluidas || nrPendentes ? (
            <div className="flex-1 flex gap-4 items-center">
              {nrConcluidas > 0 ? (
                <div className="text-center text-xs text-gray-300 flex gap-1 items-center">
                  <Check size={18} />
                  {nrConcluidas}{" "}
                  {nrConcluidas === 1 ? "concluída" : "concluídas"}
                </div>
              ) : null}
              {nrPendentes > 0 ? (
                <div className="text-center text-xs text-gray-300 flex gap-1 items-center">
                  <Clock12 size={18} />
                  {nrPendentes} {nrPendentes === 1 ? "pendente" : "pendentes"}
                </div>
              ) : null}
            </div>
          ) : null}
          <div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded text-white flex items-center gap-2 transition cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
