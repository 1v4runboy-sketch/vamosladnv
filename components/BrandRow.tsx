import Image from "next/image";
import { BRANDS } from "@/lib/brands";

export default function BrandRow() {
  const brands = [...BRANDS].sort((a,b)=> (a.priority??99)-(b.priority??99));
  return (
    <div className="container-max py-8">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 items-center">
        {brands.map(b => (
          <div key={b.id} className="relative h-12 w-full">
            <Image src={b.logo} alt={b.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
