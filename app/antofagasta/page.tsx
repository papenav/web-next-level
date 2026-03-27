import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría TI en Antofagasta | Digitup",
  description:
    "Digitup ofrece consultoría TI en Antofagasta para empresas: automatización de procesos, soporte TI, reportabilidad, soluciones cloud y desarrollo a medida.",
  alternates: {
    canonical: "https://digitup.cl/antofagasta",
  },
};

export default function AntofagastaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
          Antofagasta
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Consultoría TI en Antofagasta
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-7">
          En Digitup ayudamos a empresas en Antofagasta a optimizar, automatizar
          y fortalecer su operación mediante soluciones tecnológicas prácticas y
          alineadas a sus objetivos de negocio.
        </p>

        <p className="text-gray-600 mb-4 leading-7">
          Ofrecemos servicios de consultoría TI, automatización de procesos,
          soporte TI, desarrollo de soluciones a medida, reportabilidad y
          analítica, implementación de soluciones cloud y transformación digital.
        </p>

        <p className="text-gray-600 mb-8 leading-7">
          Trabajamos con empresas que necesitan mejorar su eficiencia, ordenar su
          operación tecnológica y tomar mejores decisiones con apoyo de
          herramientas modernas y acompañamiento continuo.
        </p>

        <a
          href="/contacto"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:scale-[1.02] transition-all duration-200"
        >
          Solicitar contacto
        </a>
      </section>
    </main>
  );
}