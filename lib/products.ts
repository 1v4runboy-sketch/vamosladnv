import { slugify } from "./utils";

export type Product = {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  subcategoryId?: string;
  images: string[]; // public paths
  short: string;
  specs?: Record<string, string>;
};

const P = (p: Omit<Product, "id">): Product => ({
  ...p,
  id: slugify(p.name),
});

export const products: Product[] = [
  P({
    name: "Verniz WEG 1314 5L",
    brandId: "weg",
    categoryId: "tintas-vernizes-weg",
    subcategoryId: "verniz-weg",
    images: ["/produtos/verniz-weg-1314-foto1.png","/produtos/verniz-weg-1314-foto2.png","/produtos/verniz-weg-foto2.webp","/produtos/verniz-weg-foto1.webp"],
    short: "Verniz isolante WEG 1314 lata 5 litros.",
    specs: {
      "Volume": "5 L",
      "Linha": "Verniz WEG 1314",
    },
  }),
  P({
    name: "Corpo Pré-filtro Jacuzzi A",
    brandId: "jacuzzi",
    categoryId: "bombas-jacuzzi",
    subcategoryId: "corpo-prefiltro",
    images: ["/produtos/cesto-a-1.webp","/produtos/cesto-a-1-new.webp","/produtos/cesto-a-2.webp"],
    short: "Corpo de pré-filtro Jacuzzi modelo A.",
  }),
  P({
    name: "Capacitor Permanente 250V",
    brandId: "jl",
    categoryId: "capacitores-permanentes",
    subcategoryId: "250v",
    images: ["/produtos/capacitor-250v-foto1.png","/produtos/capacitor-250v-foto2.png"],
    short: "Capacitor permanente (motor monofásico) 250V.",
  }),
  P({
    name: "Filme Poliéster",
    brandId: "cifa",
    categoryId: "resinas-isolantes",
    images: ["/produtos/poliester-foto1.webp","/produtos/poliester-foto2.webp"],
    short: "Filme poliéster para isolamento elétrico.",
  }),
  P({
    name: "Resina Isolante 95B",
    brandId: "weg",
    categoryId: "resinas-isolantes",
    images: ["/produtos/resina-calas-95b-1.webp","/produtos/resina-calas-95b-2.webp"],
    short: "Resina isolante 95B.",
  }),
];
