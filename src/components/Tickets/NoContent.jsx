// type Filtro = "concluidos" | "ativos" | "destaque" | "pendente" | string;

// interface NoContentProps {
//   filtro: Filtro;
// }

export default function NoContent({ filtro }) {
  return (
    <p className="text-lg text-gray-500 italic text-center">Sem tarefas.</p>
  );
}
