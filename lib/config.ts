export const SITE = {
  name: "Polus Eletrotécnica",
  cnpj: "05.886.392/0001-51",
  email: "poluseletrotecnica@hotmail.com",
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  whatsappNumber: "551135992935", // sem + no wa.me
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  googleMapsEmbed: "https://www.google.com/maps?q=Polus%20Eletrot%C3%A9cnica%20R.%20Jos%C3%A9%20Maria%20Castelo%20Prado%2C%2013%20-%20Ayrosa%2C%20Osasco%20-%20SP%2C%2006290-130&output=embed",
  title: "Polus Eletrotécnica • Catálogo Técnico",
  metaDescription: "Catálogo técnico da Polus Eletrotécnica: peças para motores elétricos e bombas d’água. Consulte disponibilidade e prazos via WhatsApp.",
};

export const THEME = {
  dark: {
    bg: "black",
    fg: "white",
  },
  light: {
    bg: "white",
    fg: "black",
  },
};

export const CTA_WHATS_TEMPLATE = (produto: string) =>
  encodeURIComponent(`Olá, tenho interesse em ${produto}. Pode informar disponibilidade e prazo, por favor?`);
