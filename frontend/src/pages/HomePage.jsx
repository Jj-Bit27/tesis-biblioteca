import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Sección Principal */}
      <section className="flex-grow flex justify-center items-center text-center py-36 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-semibold mb-6">
            Bienvenido a la Biblioteca Digital
          </h2>
          <p className="text-lg mb-8">
            Descubre libros fascinantes, accede a contenido de calidad, y
            mantente informado con nuestra extensa colección.
          </p>
          <a
            href="/inventario"
            className="inline-block bg-white text-teal-500 py-3 px-10 rounded-full text-xl font-medium hover:bg-teal-100 transition-colors"
          >
            Comienza a Buscar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFFFFF] text-black w-full py-6 mt-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p className="text-sm">
            &copy; 2024 DB Biblioteca. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-teal-400"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-teal-400"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-teal-400"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
