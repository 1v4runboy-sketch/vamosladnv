"use client";
import { useEffect, useState } from "react";
import RotatingLogo from "./RotatingLogo";
import Image from "next/image";
import clsx from "clsx";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className={clsx("fixed left-4 top-4 z-50 flex items-center gap-3 rounded-full border bg-white/80 dark:bg-black/60 backdrop-blur px-3 py-2 shadow-soft hover:shadow", open && "ring-2 ring-primary/50")}
      >
        <div className="relative h-8 w-8">
          <Image src="/loading-logo.png" alt="Menu" fill className="rounded-full" />
        </div>
        <span className="font-semibold hidden sm:inline">Menu</span>
      </button>

      <aside
        className={clsx(
          "fixed z-40 top-0 left-0 h-full w-[86%] max-w-sm bg-white/90 dark:bg-black/80 backdrop-blur border-r border-black/5 dark:border-white/10 transition-transform",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center gap-3 p-4 border-b border-black/5 dark:border-white/10">
          <RotatingLogo size={36} />
          <div className="font-semibold">Polus Eletrotécnica</div>
          <button onClick={() => setOpen(false)} className="ml-auto btn btn-outline">Fechar</button>
        </div>
        <nav className="p-4 space-y-2">
          <a className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" href="/">Início</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" href="/produtos">Produtos</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" href="/marcas">Marcas</a>
          <a className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" href="/contato">Contato</a>
        </nav>
      </aside>
    </>
  );
}
