export default function Header() {
  return (
    <header className="w-full bg-black text-white p-4">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-bold">Pedro Peña</h1>
        <ul className="flex gap-4">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}