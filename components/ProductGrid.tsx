"use client";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((p)=> <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
