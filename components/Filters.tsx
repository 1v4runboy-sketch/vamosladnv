"use client";
import { CATEGORIES } from "@/lib/categories";
import { BRANDS } from "@/lib/brands";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Toggle({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      className={"px-3 py-1 rounded-full border text-sm " + (active ? "bg-primary text-white border-primary" : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function Filters() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const marca = sp.get("marca") ?? "";
  const cat = sp.get("cat") ?? "";
  const subcat = sp.get("subcat") ?? "";

  const setParam = (k: string, v: string | null) => {
    const params = new URLSearchParams(sp.toString());
    if (v) params.set(k, v); else params.delete(k);
    if (k === "cat" && !v) params.delete("subcat");
    router.replace(pathname + "?" + params.toString());
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 text-sm font-semibold">Marca</div>
        <div className="flex flex-wrap gap-2">
          <Toggle active={!marca} label="Todas" onClick={() => setParam("marca", null)} />
          {BRANDS.map(b => (
            <Toggle key={b.id} active={marca===b.id} label={b.name} onClick={() => setParam("marca", b.id)} />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-sm font-semibold">Categoria</div>
        <div className="flex flex-wrap gap-2">
          <Toggle active={!cat} label="Todas" onClick={() => setParam("cat", null)} />
          {CATEGORIES.map(c => (
            <Toggle key={c.id} active={cat===c.id} label={c.name} onClick={() => setParam("cat", c.id)} />
          ))}
        </div>
      </div>
      {cat && (CATEGORIES.find(c=>c.id===cat)?.children?.length) ? (
        <div>
          <div className="mb-2 text-sm font-semibold">Subcategoria</div>
          <div className="flex flex-wrap gap-2">
            <Toggle active={!subcat} label="Todas" onClick={() => setParam("subcat", null)} />
            {CATEGORIES.find(c=>c.id===cat)!.children!.map(sc => (
              <Toggle key={sc.id} active={subcat===sc.id} label={sc.name} onClick={() => setParam("subcat", sc.id)} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
