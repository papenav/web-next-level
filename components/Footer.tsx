export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Digitup · Todos los derechos reservados
      </p>
      <p className="mt-1">
        Desarrollado por <span className="font-medium text-black">Digitup</span>
      </p>
    </footer>
  );
}