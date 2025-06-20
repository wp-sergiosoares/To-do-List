import { ClockFading } from "lucide-react";
export default function Header() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <ClockFading size={28} className=" text-[var(--color-primary)]" />
      <h1 className="text-3xl text-[var(--color-primary)] font-mono font-bold tracking-tighter">
        Lista de Tarefas
      </h1>
    </div>
  );
}
