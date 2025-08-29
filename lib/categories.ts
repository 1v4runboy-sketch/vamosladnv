export type Category = {
  id: string;
  name: string;
  children?: { id: string; name: string }[];
};

export const CATEGORIES: Category[] = [
  {
    id: "bombas-jacuzzi",
    name: "Peças para Bombas Jacuzzi",
    children: [
      { id: "flange", name: "Flanges" },
      { id: "corpo-prefiltro", name: "Corpos de Pré-filtro" },
      { id: "bracket", name: "Brackets" },
      { id: "cesto", name: "Cestos" },
    ],
  },
  {
    id: "capacitores-eletroliticos",
    name: "Capacitores Eletrolíticos",
    children: [
      { id: "110v", name: "110V" },
      { id: "220v", name: "220V" },
    ],
  },
  {
    id: "capacitores-permanentes",
    name: "Capacitores Permanentes",
    children: [
      { id: "250v", name: "250V" },
      { id: "380v", name: "380V" },
      { id: "440v", name: "440V" },
    ],
  },
  {
    id: "tintas-vernizes-weg",
    name: "Tintas e Vernizes WEG",
    children: [
      { id: "verniz-weg", name: "Vernizes WEG (1L e 5L)" },
      { id: "tinta-weg", name: "Tintas WEG" },
      { id: "diluentes-weg", name: "Diluentes WEG (1L e 5L)" },
    ],
  },
  { id: "resinas-isolantes", name: "Resinas Isolantes" },
];
