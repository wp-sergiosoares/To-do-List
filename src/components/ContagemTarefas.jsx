import { Clock12, Check } from "lucide-react";

export default function ContagemTarefas({ nrConcluidas, nrPendentes }) {
  return (
    <>
      {nrConcluidas || nrPendentes ? (
        <div className="flex gap-4 items-center justify-center mb-5">
          {nrConcluidas > 0 ? (
            <div className="text-center text-xs text-gray-300 flex gap-1 items-center">
              <Check size={18} />
              {nrConcluidas} {nrConcluidas === 1 ? "concluída" : "concluídas"}
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
    </>
  );
}
