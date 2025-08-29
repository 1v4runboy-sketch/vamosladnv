"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/** Rotação contínua Y com continuidade e boost no hover (6s -> 2s). */
export default function RotatingLogo({ size=64 }: { size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const speed = useRef<number>(360/6); // deg/s base
  const angle = useRef<number>(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const target = hover ? 360/2 : 360/6; // 2s/volta on hover
      // easing leve para trocar velocidade sem pular
      speed.current += (target - speed.current) * Math.min(1, dt*6);
      angle.current = (angle.current + speed.current * dt) % 360;
      if (ref.current) {
        ref.current.style.transform = `rotateY(${angle.current}deg)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ perspective: 1000 }}
      className="inline-block"
      aria-label="Polus Eletrotécnica"
    >
      <div
        ref={ref}
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* face frontal */}
        <div className="absolute inset-0 backface-hidden [transform:translateZ(1px)]">
          <Image src="/logo-rotating.svg" alt="Polus" fill priority />
        </div>
        {/* face traseira idêntica, rotacionada 180deg para não espelhar */}
        <div className="absolute inset-0 [transform:rotateY(180deg)_translateZ(1px)] backface-hidden">
          <Image src="/logo-rotating.svg" alt="Polus" fill />
        </div>
      </div>
    </div>
  );
}
