import React from "react";

const SearchList = ({ libros }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Resultados de la Búsqueda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No se encontraron resultados.
          </p>
        ) : (
          libros.map((libro) => (
            <div
              key={libro.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {libro.titulo}
              </h3>
              <div className="text-gray-600 text-sm mb-4">
                <p>
                  <span className="font-semibold">Autor:</span> {libro.autor}
                </p>
                <p>
                  <span className="font-semibold">Categoría:</span>{" "}
                  {libro.categoria}
                </p>
                <p>
                  <span className="font-semibold">Editorial:</span>{" "}
                  {libro.editorial}
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-500 text-xs">
                <p>Páginas: {libro.paginas}</p>
                <p>Existencias: {libro.existencias}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchList;
