import AdminForm from "../components/AdminForm.jsx";
import { useState } from "react";

export default function AgregarRegistros() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [idAlumno, setIdAlumno] = useState("");
  const [idLibro, setIdLibro] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaTermino, setFechaTermino] = useState("");
  const [idEntregado, setIdEntregado] = useState("");

  const handleValidation = (clave) => {
    if (clave === "123456") {
      setIsAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  const guardarRegistro = async (e) => {
    e.preventDefault(); // Previene la recarga de la página
    try {
      const response = await fetch("http://localhost:5000/api/registros/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_alumno: idAlumno,
          id_libro: idLibro,
          inicio: fechaInicio,
          fin: fechaTermino,
          id_entregado: idEntregado,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Error al guardar el registro");
      }

      const data = await response.json();
      alert("Registro guardado exitosamente: " + JSON.stringify(data));
    } catch (error) {
      alert("Hubo un error: " + error.message + " No jala we");
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div>
          <AdminForm onValidate={handleValidation} />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white/[0.005] bg-[#b2b6bb] rounded-lg shadow-lg">
          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            onSubmit={guardarRegistro}
          >
            {/* ID Alumno */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="idAlumno"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                ID Alumno:
              </label>
              <input
                type="text"
                id="idAlumno"
                placeholder="ID del alumno"
                className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                onChange={(event) => setIdAlumno(event.target.value)}
              />
            </div>

            {/* ID Libro */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="idLibro"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                ID Libro:
              </label>
              <input
                type="text"
                id="idLibro"
                placeholder="ID del libro"
                className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                onChange={(event) => setIdLibro(event.target.value)}
              />
            </div>

            {/* Fecha de Inicio */}
            <div className="sm:col-span-1">
              <label
                htmlFor="fechaInicio"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Fecha de Inicio:
              </label>
              <input
                type="date"
                id="fechaInicio"
                className="w-full px-3 py-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                onChange={(event) => setFechaInicio(event.target.value)}
              />
            </div>

            {/* Fecha de Finalización */}
            <div className="sm:col-span-1">
              <label
                htmlFor="fechaTermino"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Fecha de Término:
              </label>
              <input
                type="date"
                id="fechaTermino"
                className="w-full px-3 py-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                onChange={(event) => setFechaTermino(event.target.value)}
              />
            </div>

            {/* ID Entregado */}
            <div className="sm:col-span-2">
              <label
                htmlFor="idEntregado"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                ID Entregado:
              </label>
              <input
                type="text"
                id="idEntregado"
                placeholder="ID del entregado"
                className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                onChange={(event) => setIdEntregado(event.target.value)}
              />
            </div>

            {/* Botón de Guardar */}
            <div className="col-span-4">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-600"
              >
                Guardar Registro
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
