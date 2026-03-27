import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto | Digitup",
  description:
    "Contáctate con Digitup para consultoría TI, automatización de procesos, soporte TI, reportabilidad y soluciones tecnológicas en Antofagasta y todo Chile.",
};

export default function ContactoPage() {
  return <ContactoPageClient />;
}