import { siWhatsapp } from "simple-icons/icons";

export default function WhatsAppButton() {
  const message =
    "Hola, me gustaría una evaluación de mis procesos.";

  return (
    <a
      href={`https://wa.me/56933541437?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" width={26} height={26}>
        <path d={siWhatsapp.path} fill="white" />
      </svg>
    </a>
  );
}