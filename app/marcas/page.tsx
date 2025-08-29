import { BRANDS } from "@/lib/brands";
import Image from "next/image";

export default function Marcas() {
  const brands = [...BRANDS].sort((a,b)=> (a.priority??99)-(b.priority??99));
  return (
    <main className="container-max py-6">
      <h1 className="text-2xl font-bold mb-4">Marcas</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map(b => (
          <div key={b.id} className="card p-4 flex items-center justify-center">
            <div className="relative h-16 w-full">
              <Image src={b.logo} alt={b.name} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
