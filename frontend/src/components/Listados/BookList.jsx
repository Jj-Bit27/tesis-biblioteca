import React, { useState, useEffect } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get/libros");

        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const { result } = await response.json();
        setBooks(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 mt-2 bg-white shadow rounded-md flex justify-between items-center border-b border-gray-300 py-4"
        >
          {/* Lado izquierdo: Título y autor */}
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              {book.titulo}
            </h2>
            <p className="text-sm text-gray-500">{book.autor}</p>
          </div>

          {/* Centro: Existencias */}
          <div className="text-center">
            <span className="text-md font-medium text-gray-700">
              Existencias: {book.existencias}
            </span>
          </div>

          {/* Lado derecho: Editorial y categoría */}
          <div className="text-right">
            <p className="text-sm text-gray-500">{book.editorial}</p>
            <p className="text-sm text-gray-500">{book.categoria}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
