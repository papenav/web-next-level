export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Soluciones TI para empresas y emprendedores
        </h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Te ayudo con consultoría TI, DevOps, automatización, soporte técnico y
          mejora de procesos tecnológicos.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/servicios"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Ver servicios
          </a>
          <a
            href="/contacto"
            className="border border-black px-6 py-3 rounded-lg"
          >
            Contacto
          </a>
        </div>
      </section>
    </main>
  );
}