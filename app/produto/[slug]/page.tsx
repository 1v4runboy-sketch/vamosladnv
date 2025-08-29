import { products } from "@/lib/products";
import { BRANDS } from "@/lib/brands";
import { CATEGORIES } from "@/lib/categories";
import Image from "next/image";
import WhatsFloat from "@/components/WhatsFloat";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find(x => x.id === params.slug);
  if (!p) return <div className="container-max py-10">Produto não encontrado.</div>;
  const brand = BRANDS.find(b => b.id===p.brandId);
  const cat = CATEGORIES.find(c => c.id===p.categoryId);
  const related = products.filter(x => x.id!==p.id && (x.brandId===p.brandId || x.categoryId===p.categoryId)).slice(0,8);

  return (
    <main className="container-max py-6">
      <nav className="text-sm opacity-80">
        <Link className="link" href="/produtos">Produtos</Link> /{" "}
        <span>{p.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* carousel simples */}
        <div className="card p-3">
          <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory">
            {p.images.map((src, i) => (
              <div key={i} className="relative snap-start shrink-0 w-full h-80">
                <Image src={src} alt={`${p.name} ${i+1}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs mb-2">
            <span className="badge">{brand?.name ?? p.brandId}</span>
          </div>
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <p className="mt-2 opacity-90">{p.short}</p>

          {p.specs && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Especificações</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(p.specs).map(([k,v]) => (
                      <tr key={k} className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4 opacity-70">{k}</td>
                        <td className="py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <a className="btn btn-primary" target="_blank" href={`https://wa.me/551135992935?text=${encodeURIComponent(`Olá, tenho interesse em ${p.name}. Pode informar disponibilidade e prazo, por favor?`)}`}>Consultar no WhatsApp</a>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-3">Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(r => (
              <Link key={r.id} href={`/produto/${r.id}`} className="card p-3 hover:-translate-y-0.5 transition">
                <div className="relative h-32 w-full">
                  <Image src={r.images[0]} alt={r.name} fill className="object-contain" />
                </div>
                <div className="text-xs mt-2"><span className="badge">{BRANDS.find(b=>b.id===r.brandId)?.name ?? r.brandId}</span></div>
                <div className="font-semibold mt-1 line-clamp-2">{r.name}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* flutuante com nome do produto */}
      <WhatsFloat productName={p.name} />
    </main>
  );
}
