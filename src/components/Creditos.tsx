import { Mail, MessageCircleMore } from "lucide-react";

export default function Creditos() {
  return (
    <div className="mt-15 text-center text-gray-300 dark:text-gray-600 text-sm space-y-1">
      <div>
        <a
          href="mailto:virtual.sergiosoares@gmail.com"
          target="_blank"
          className=" hover:text-gray-400 flex gap-1 items-center justify-center transition"
        >
          <Mail size={18} />
          virtual.sergiosoares@gmail.com
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/351914410560"
          target="_blank"
          className=" hover:text-gray-400 flex gap-1 items-center justify-center transition"
        >
          <MessageCircleMore size={18} />
          914410560
        </a>
      </div>
    </div>
  );
}
