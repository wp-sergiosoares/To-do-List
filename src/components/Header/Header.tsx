import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function Header() {
  const container = useRef(null);

  useGSAP(
    () => {
      let mySplitText = new SplitText(".logo", {
        type: "chars",
      });

      gsap.from(mySplitText.chars, {
        duration: 0.3,
        y: 20,
        autoAlpha: 0,
        stagger: 0.02,
        ease: "back.out",
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="text-center">
      <h1 className="logo text-4xl font-bold tracking-tighter font-[Nunito] text-[var(--color-primary)]">
        Lista de Tarefas
      </h1>
    </div>
  );
}
