import { SITE } from "@/lib/config";

export default function Contato() {
  return (
    <main className="container-max py-6 space-y-6">
      <h1 className="text-2xl font-bold">Contato</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4">
          <div className="font-semibold">{SITE.name}</div>
          <div className="opacity-80 mt-1">{SITE.address}</div>
          <div className="opacity-80 mt-1"><a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
          <div className="mt-2 flex gap-3">
            <a className="btn btn-primary" target="_blank" href={`https://wa.me/${SITE.whatsappNumber}`}>Abrir WhatsApp</a>
            <a className="btn btn-outline" target="_blank" href={SITE.instagram}>Instagram</a>
          </div>
        </div>
        <div className="card p-2">
          <iframe
            src={SITE.googleMapsEmbed}
            width="100%"
            height="320"
            loading="lazy"
            className="rounded-xl"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
