"use client";
import { SITE, CTA_WHATS_TEMPLATE } from "@/lib/config";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WhatsFloat({ productName }: { productName?: string }) {
  const pathname = usePathname();
  const text = CTA_WHATS_TEMPLATE(productName ?? "um produto");
  const href = `https://wa.me/${SITE.whatsappNumber}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={clsx(
        "fixed z-50 right-4 bottom-4 rounded-full shadow-soft animate-pulseGentle",
        "bg-white/90 dark:bg-black/70 backdrop-blur border border-black/5 dark:border-white/10",
        "hover:scale-105 transition"
      )}
    >
      <div className="relative h-14 w-14">
        <Image src="/whatsapp-green.svg" alt="WhatsApp" fill />
      </div>
    </a>
  );
}
