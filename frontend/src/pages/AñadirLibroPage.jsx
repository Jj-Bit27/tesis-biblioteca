import AdminForm from "../components/AdminForm.jsx";
import { useState } from "react";

export default function AgregarLibros() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleValidation = (clave) => {
    if (clave === "123456") {
      setIsAuthorized(true); // Autoriza al usuario si la clave es correcta
    } else {
      alert("Clave incorrecta"); // Muestra un mensaje si la clave es incorrecta
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div>
          <AdminForm onValidate={handleValidation} />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white/[0.005] bg-[#b2b6bb] p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nombre del libro */}
            <div className="col-span-2">
              <label
                htmlFor="nombreLibro"
                className="block text-sm font-medium text-gray-900"
              >
                Libro:
              </label>
              <input
                type="text"
                id="nombreLibro"
                placeholder="Nombre del libro"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-slate-200"
              />
            </div>

            {/* Autor */}
            <div className="col-span-2">
              <label
                htmlFor="autor"
                className="block text-sm font-medium text-gray-900"
              >
                Autor:
              </label>
              <input
                type="text"
                id="autor"
                placeholder="Nombre completo del autor"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-slate-200"
              />
            </div>

            {/* Editorial */}
            <div>
              <label
                htmlFor="editorial"
                className="block text-sm font-medium text-gray-900"
              >
                Editorial:
              </label>
              <input
                type="text"
                id="editorial"
                placeholder="Nombre de la editorial"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-slate-200"
              />
            </div>

            {/* Categoría */}
            <div>
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-gray-900"
              >
                Categoría:
              </label>
              <input
                type="text"
                id="categoria"
                placeholder="Categoría"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-slate-200"
              />
            </div>

            {/* Existencias */}
            <div>
              <label
                htmlFor="existencias"
                className="block text-sm font-medium text-gray-900"
              >
                Existencias:
              </label>
              <input
                type="number"
                id="existencias"
                placeholder="Número de existencias"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-slate-200"
              />
            </div>

            {/* Páginas */}
            <div>
              <label
                htmlFor="paginas"
                className="block text-sm font-medium text-gray-900"
              >
                Páginas:
              </label>
              <input
                type="number"
                id="paginas"
                placeholder="Número de páginas"
                className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Botón */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-slate-500 text-white font-medium rounded-md shadow-sm hover:bg-slate-600"
              >
                Guardar Libro
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
