export default function ServiciosPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Servicios</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Consultoría TI</h2>
          <p>
            Asesoría para mejorar procesos, herramientas y operación tecnológica.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">DevOps y CI/CD</h2>
          <p>
            Automatización de despliegues, integración continua y mejora de flujos.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Docker y Kubernetes</h2>
          <p>
            Apoyo en contenedores, orquestación y buenas prácticas de despliegue.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Soporte y asesoría</h2>
          <p>
            Apoyo técnico para empresas, diagnóstico de problemas y propuestas de mejora.
          </p>
        </div>
      </div>
    </main>
  );
}