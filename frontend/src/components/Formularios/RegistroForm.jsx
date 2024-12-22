import React from "react";
import Notificacion from "../Notification";

function RegistroForm({
  idAlumno,
  idLibro,
  idEntregado,
  setIdAlumno,
  setIdLibro,
  setFechaInicio,
  setFechaTermino,
  setIdEntregado,
  guardarRegistro,
  alumnos,
  libros,
  entregados,
  notification,
  error,
}) {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white/[0.005] bg-[#c7ccd4] rounded-lg shadow-xl">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        onSubmit={guardarRegistro}
      >
        {/* Alumno */}
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="idAlumno"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
            Alumno:
          </label>
          <select
            id="idAlumno"
            className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
            value={idAlumno}
            onChange={(event) => setIdAlumno(event.target.value)}
          >
            <option value="">Seleccione un alumno</option>
            {alumnos.map((alumno) => (
              <option key={alumno.id} value={alumno.id}>
                {alumno.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Libro */}
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="idLibro"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
            Libro:
          </label>
          <select
            id="idLibro"
            className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
            value={idLibro}
            onChange={(event) => setIdLibro(event.target.value)}
          >
            <option value="">Seleccione un libro</option>
            {libros.map((libro) => (
              <option key={libro.id} value={libro.id}>
                {libro.titulo}
              </option>
            ))}
          </select>
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

        {/* Entregado */}
        <div className="sm:col-span-2">
          <label
            htmlFor="idEntregado"
            className="block text-sm font-medium text-gray-900 mb-1"
          >
            Entregado:
          </label>
          <select
            id="idEntregado"
            className="w-full px-3 py-1.5 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
            value={idEntregado}
            onChange={(event) => setIdEntregado(event.target.value)}
          >
            <option value="">Seleccione una opción</option>
            {entregados.map((entregado) => (
              <option key={entregado.id} value={entregado.id}>
                {entregado.estado == 0 ? "No" : "Sí"}
              </option>
            ))}
          </select>
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

      {/* Notificación */}
      {(notification == "true" && (
        <Notificacion
          title={"Registro guardado exitosamente."}
          message={"El registro se ha añadido exitosamente al sistema."}
          type={notification}
        />
      )) ||
        (notification == "error" && (
          <Notificacion
            title={"Error al guardar el registro."}
            message={error}
            type={notification}
          />
        ))}
    </div>
  );
}

export default RegistroForm;
