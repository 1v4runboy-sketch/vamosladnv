import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import RotatingLogo from "@/components/RotatingLogo";
import WhatsFloat from "@/components/WhatsFloat";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.metaDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen">
        <Sidebar />
        <header className="h-[var(--header-h)] border-b border-black/5 dark:border-white/10 sticky top-0 bg-white/70 dark:bg-black/50 backdrop-blur z-30">
          <div className="container-max h-full flex items-center gap-3">
            <RotatingLogo size={36} />
            <div className="font-semibold">Polus Eletrotécnica</div>
            <nav className="ml-auto flex items-center gap-4 text-sm">
              <a href="/" className="hover:underline">Início</a>
              <a href="/produtos" className="hover:underline">Produtos</a>
              <a href="/marcas" className="hover:underline">Marcas</a>
              <a href="/contato" className="hover:underline">Contato</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-12 border-t border-black/5 dark:border-white/10">
          <div className="container-max py-6 text-sm flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <div>
              <div className="font-semibold">{SITE.name}</div>
              <div className="opacity-80">{SITE.address}</div>
              <div className="opacity-80">CNPJ: {SITE.cnpj}</div>
              <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="opacity-80">
              © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
            </div>
          </div>
        </footer>
        <WhatsFloat />
      </body>
    </html>
  );
}
