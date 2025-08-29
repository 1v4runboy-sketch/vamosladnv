"use client";
import Image from "next/image";
import { useRef } from "react";

type Review = {
  name: string;
  photo: string;
  text: string;
};

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="container-max my-12">
      <h2 className="text-xl font-bold mb-4">O que dizem nossos clientes</h2>
      <div className="relative">
        <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {reviews.map((r, i) => (
            <div key={i} className="card snap-start shrink-0 w-[320px] p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={r.photo} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs stars" aria-label="5 estrelas" />
                </div>
              </div>
              <p className="mt-3 text-sm opacity-90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
