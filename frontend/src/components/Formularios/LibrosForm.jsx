import React from "react";
import Notificacion from "../Notification";

function LibrosForm({
  handleSubmit,
  autores,
  editoriales,
  categorias,
  autorSeleccionado,
  setAutorSeleccionado,
  editorialSeleccionada,
  setEditorialSeleccionada,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  titulo,
  setTitulo,
  existencias,
  setExistencias,
  paginas,
  setPaginas,
  notificacion,
  error,
}) {
  return (
    <div className="max-w-4xl mx-auto bg-white/[0.005] bg-[#c7ccd4] p-6 rounded-lg shadow-xl">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {/* Título del libro */}
        <div className="col-span-2">
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-900"
          >
            Título del libro:
          </label>
          <input
            type="text"
            id="titulo"
            placeholder="Nombre del libro"
            className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
          <select
            id="autor"
            className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
            value={autorSeleccionado}
            onChange={(e) => setAutorSeleccionado(e.target.value)}
          >
            <option value="">Seleccione un autor</option>
            {autores.map((autor) => (
              <option key={autor.id} value={autor.id}>
                {autor.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Editorial */}
        <div>
          <label
            htmlFor="editorial"
            className="block text-sm font-medium text-gray-900"
          >
            Editorial:
          </label>
          <select
            id="editorial"
            className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
            value={editorialSeleccionada}
            onChange={(e) => setEditorialSeleccionada(e.target.value)}
          >
            <option value="">Seleccione una editorial</option>
            {editoriales.map((editorial) => (
              <option key={editorial.id} value={editorial.id}>
                {editorial.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Categoría */}
        <div>
          <label
            htmlFor="categoria"
            className="block text-sm font-medium text-gray-900"
          >
            Categoría:
          </label>
          <select
            id="categoria"
            className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
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
            className="mt-1 w-full rounded-md px-3 py-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-slate-200"
            value={existencias}
            onChange={(e) => setExistencias(e.target.value)}
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
            value={paginas}
            onChange={(e) => setPaginas(e.target.value)}
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

      {/* Notificación */}
      {(notificacion == "true" && (
        <Notificacion
          title={"Libro guardado exitosamente."}
          message={"El libro se ha añadido exitosamente al sistema."}
          type={notificacion}
        />
      )) ||
        (notificacion == "error" && (
          <Notificacion
            title={"Error al guardar el libro."}
            message={error}
            type={notificacion}
          />
        ))}
    </div>
  );
}

export default LibrosForm;
