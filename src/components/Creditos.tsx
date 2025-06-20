import { Mail, MessageCircleMore } from "lucide-react";

export default function Creditos() {
  return (
    <div className="mt-15 text-center text-gray-300 text-sm space-y-1">
      <div className="">
        <a
          href="https://portfolio-two-peach-25.vercel.app/"
          target="_blank"
          className=" hover:text-gray-400"
        >
          Desenvolvido por Sérgio Soares
        </a>
      </div>
      <div>
        <a
          href="mailto:virtual.sergiosoares@gmail.com"
          target="_blank"
          className=" hover:text-gray-400 flex gap-2 items-center justify-center"
        >
          <Mail size={18} />
          virtual.sergiosoares@gmail.com
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/351914410560"
          target="_blank"
          className=" hover:text-gray-400 flex gap-2 items-center justify-center"
        >
          <MessageCircleMore size={18} />
          91 4410560
        </a>
      </div>
    </div>
  );
}
