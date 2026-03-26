"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Contacto Digitup
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="mensaje"
          placeholder="Cuéntanos qué necesitas"
          required
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {success && (
          <p className="text-green-600 text-center">
            Solicitud enviada correctamente 🚀
          </p>
        )}
      </form>
    </main>
  );
}