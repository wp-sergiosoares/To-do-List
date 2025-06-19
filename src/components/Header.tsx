import { ClockFading } from "lucide-react";
export default function Header() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <h1 className="text-xl text-[var(--color-primary)] font-mono font-bold tracking-tight">
        Lista de Tarefas
      </h1>
      <ClockFading size={24} className=" text-[var(--color-primary)]" />
    </div>
  );
}
