import ServicesCarousel from "@/components/ServicesCarousel";
import { CheckCircle, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
          Digitup
        </p>

        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Consultoría TI y Automatización de Procesos
        </h1>

        <p className="text-xl mb-4 max-w-3xl mx-auto text-gray-600">
          Tecnología que impulsa tu negocio
        </p>

        <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-600">
          Ayudamos a empresas y emprendedores a optimizar, automatizar y
          transformar digitalmente sus procesos con soluciones tecnológicas a
          medida.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/servicios"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all duration-200"
          >
            Ver servicios
          </a>
          <a
            href="/contacto"
            className="border border-black px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      </section>

      <div className="mt-20 py-16">
        <div className="max-w-4xl mx-auto">
          <ServicesCarousel />
        </div>
      </div>

      <section className="mt-20 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <CheckCircle className="mb-4 mx-auto text-black" size={36} />
          <h3 className="font-bold text-lg mb-2">Resultados concretos</h3>
          <p>Soluciones enfocadas en mejorar eficiencia, control y operación.</p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <Zap className="mb-4 mx-auto text-black" size={36} />
          <h3 className="font-bold text-lg mb-2">Automatización real</h3>
          <p>Reducimos tareas manuales y optimizamos flujos de trabajo.</p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <Users className="mb-4 mx-auto text-black" size={36} />
          <h3 className="font-bold text-lg mb-2">Acompañamiento continuo</h3>
          <p>Actuamos como socio tecnológico en cada etapa de tu crecimiento.</p>
        </div>
      </section>

      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Qué es Digitup?</h2>
        <p className="text-lg leading-8 text-gray-700">
          Digitup es una consultora TI orientada a ayudar a empresas y
          emprendedores a optimizar, automatizar y transformar digitalmente sus
          procesos. A través de soluciones tecnológicas diseñadas a medida,
          apoyamos la mejora de la eficiencia operativa, la reducción de errores
          y el fortalecimiento de la gestión empresarial.
        </p>
      </section>

      <section className="mt-20 text-center bg-black text-white py-16 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas una solución tecnológica a medida?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contáctanos para evaluar tu caso y proponerte una solución alineada a
          tus objetivos de negocio.
        </p>

        <a
          href="/contacto"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold over:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200"
        >
          Contactar ahora
        </a>
      </section>
    </main>
  );
}