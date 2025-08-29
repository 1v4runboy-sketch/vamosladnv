"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products as ALL } from "@/lib/products";
import { BRANDS } from "@/lib/brands";
import { CATEGORIES } from "@/lib/categories";
import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";

export default function ProdutosPage() {
  const sp = useSearchParams();

  const q = sp.get("q")?.toLowerCase() ?? "";
  const marca = sp.get("marca") ?? "";
  const cat = sp.get("cat") ?? "";
  const subcat = sp.get("subcat") ?? "";
  const page = Math.max(1, parseInt(sp.get("page") ?? "1"));

  const data = useMemo(() => {
    const enriched = ALL.map(p => ({
      ...p,
      brand: BRANDS.find(b => b.id===p.brandId),
      category: CATEGORIES.find(c => c.id===p.categoryId),
    }));
    let list = enriched;
    if (q) list = list.filter(p => (p.name.toLowerCase().includes(q) || p.short.toLowerCase().includes(q)));
    if (marca) list = list.filter(p => p.brandId===marca);
    if (cat) list = list.filter(p => p.categoryId===cat);
    if (subcat) list = list.filter(p => p.subcategoryId===subcat);
    // shuffle for aleatória
    list = [...list].sort(() => Math.random()-0.5);
    return list;
  }, [q, marca, cat, subcat]);

  const pageSize = 15;
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const start = (page-1)*pageSize;
  const items = data.slice(start, start + pageSize);

  const qs = (k:string, v:string) => {
    const params = new URLSearchParams(sp.toString());
    if (v) params.set(k, v); else params.delete(k);
    return "?" + params.toString();
  }

  return (
    <main className="container-max py-6">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        <div className="card p-4 self-start sticky top-[calc(var(--header-h)+16px)]">
          <Filters />
        </div>
        <div className="space-y-4">
          <SearchBar />
          <ProductGrid items={items} />
          <div className="flex items-center justify-center gap-2 pt-4">
            <a className={"btn " + (page<=1?"btn-outline opacity-50 pointer-events-none":"btn-outline")} href={qs("page", String(page-1))}>Anterior</a>
            <div className="opacity-80 text-sm">Página {page} de {totalPages}</div>
            <a className={"btn " + (page>=totalPages?"btn-outline opacity-50 pointer-events-none":"btn-outline")} href={qs("page", String(page+1))}>Próxima</a>
          </div>
        </div>
      </div>
    </main>
  );
}
