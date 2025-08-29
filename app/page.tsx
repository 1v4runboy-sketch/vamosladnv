import Image from "next/image";
import { products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import BrandRow from "@/components/BrandRow";
import ReviewCarousel from "@/components/ReviewCarousel";

const HERO = {
  headline: "Peças técnicas para motores e bombas d’água.",
  sub: "Catálogo técnico com busca e filtros. Consulte disponibilidade e prazos diretamente no WhatsApp.",
};

const REVIEWS = [
  { name: "Dos Anjos", photo: "/reviews/dos-anjos.png", text: "Atendimento maravilhoso e ágil, preços justos e com diversidades de produtos. Sou cliente a muitos anos, e super recomendo" },
  { name: "Rafael R. dos Santos", photo: "/reviews/rafael.png", text: "Ótima Empresa. Atendimento rápido, boa organização dos produtos. Nota 10 para atendente Fernanda. Recomendo a Todos." },
  { name: "Sandro Backschat", photo: "/reviews/sandro.png", text: "Ótimo atendimento, empresa cumpre o que promete ! Fernanda me explicou certinho sobre as peças, muito gente boa ! Recomendo !!!!" },
  { name: "Meire Polezi", photo: "/reviews/meire.png", text: "Preço muito bom e atendimento nota 10. A atendente Fernanda me atendeu e esclareceu todas as minhas dúvidas. Parabéns" },
  { name: "Thalia Ariadna", photo: "/reviews/thalia.png", text: "Atendente Heitor super prestativo! Me explicou muito bem sobre as peças, ótimo comércio!" },
  { name: "Renata _", photo: "/reviews/renata.png", text: "Avaliando principalmente pelo atendimento da Fernanda, sempre muito simpática e atenciosa com os clientes." },
  { name: "James Lourenço Gonçalves", photo: "/reviews/james.png", text: "Ótimo atendimento e bons preços, super indico!!" },
  { name: "Darah Mendes", photo: "/reviews/darah.png", text: "gostei muito das peças e o atendimento impecavel da Fernanda 👏🏽 …" },
  { name: "Rodrigoyasmin Almeida", photo: "/reviews/rodrigo-yasmin.png", text: "Ótimo atendimento da Fernanda super prestativa 👍 …" },
  { name: "Jorge dos Santos", photo: "/reviews/jorge.png", text: "Excelente, empresa familiar, sabem o que estão fazendo" },
];

export default function Page() {
  const featured = products.slice(0, 5);
  return (
    <main>
      {/* hero com vídeo/loop webp */}
      <section className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
        <Image src="/hero/loop.webp" alt="" fill className="object-cover opacity-25 dark:opacity-50" priority />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,90,169,.25),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(0,90,169,.35),transparent_40%)]" />
        <div className="relative container-max h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl">{HERO.headline}</h1>
          <p className="mt-3 opacity-90 max-w-2xl">{HERO.sub}</p>
          <div className="mt-6 flex gap-3">
            <a href="/produtos" className="btn btn-primary">Ver catálogo</a>
            <a href="/contato" className="btn btn-outline">Fale conosco</a>
          </div>
        </div>
      </section>

      <BrandRow />

      <section className="container-max my-10">
        <h2 className="text-xl font-bold mb-4">Vitrine</h2>
        <ProductGrid items={featured} />
      </section>

      <ReviewCarousel reviews={REVIEWS} />
    </main>
  );
}
