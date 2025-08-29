"use client";
import Image from "next/image";
import Link from "next/link";
import { CTA_WHATS_TEMPLATE, SITE } from "@/lib/config";
import clsx from "clsx";

export default function ProductCard({ p }: { p: any }) {
  const url = `/produto/${p.id}`;
  const wa = `https://wa.me/${SITE.whatsappNumber}?text=${CTA_WHATS_TEMPLATE(p.name)}`;

  return (
    <div className="card p-3 flex flex-col group hover:-translate-y-0.5 transition-transform">
      <Link href={url} className="relative h-44 w-full overflow-hidden rounded-lg bg-black/5 dark:bg-white/5">
        <Image
          src={p.images?.[0] ?? "/placeholder.jpg"}
          alt={p.name}
          fill
          className="object-contain transition duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="mt-3 text-xs">
        <span className="badge">{p.brand?.name ?? p.brandId}</span>
      </div>
      <Link href={url} className="mt-2 font-semibold leading-tight hover:underline">
        {p.name}
      </Link>
      <p className="text-sm opacity-80 mt-1 line-clamp-2">{p.short}</p>
      <div className="mt-3 flex gap-2">
        <a href={wa} target="_blank" className="btn btn-primary flex-1">Consultar no WhatsApp</a>
        <Link href={url} className="btn btn-outline">Detalhes</Link>
      </div>
    </div>
  );
}
