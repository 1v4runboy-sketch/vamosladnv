export type Brand = {
  id: string;
  name: string;
  logo: string; // public path
  priority?: number;
};

export const BRANDS: Brand[] = [
  { id: "weg", name: "WEG", logo: "/marcas/weg.webp", priority: 1 },
  { id: "jacuzzi", name: "Jacuzzi", logo: "/marcas/jacuzzi.webp", priority: 2 },
  { id: "jl", name: "JL Capacitores", logo: "/marcas/jl-capacitores.webp", priority: 3 },
  { id: "cifa", name: "CIFA", logo: "/marcas/cifa.webp" },
  { id: "igui", name: "IGUI", logo: "/marcas/igui.webp" },
  { id: "lanc", name: "LANC Comercial", logo: "/marcas/lanc-comercial.webp" },
  { id: "solda-cobix", name: "Solda Cobix", logo: "/marcas/solda-cobix.webp" },
];
