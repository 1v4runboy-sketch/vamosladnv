"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function SearchBar() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(sp.toString());
      if (q) params.set("q", q);
      else params.delete("q");
      router.replace(pathname + "?" + params.toString());
    }, 350);
    return () => clearTimeout(handler);
  }, [q]); // eslint-disable-line

  return (
    <input
      className={clsx("w-full rounded-xl border px-4 py-2", "bg-white/90 dark:bg-white/5 border-black/10 dark:border-white/10")}
      placeholder="Buscar produtos…"
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
  );
}
