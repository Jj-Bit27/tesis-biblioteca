import { useState, useEffect } from "react";

export default function RegisterList() {
  /* Estado para almacenar los registros */
  const [registros, setRegisters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Obtener los registros */
  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/registros/gets"
        );

        if (!response.ok) {
          throw new Error("Error al obtener los registros");
        }
        const { result } = await response.json();
        setRegisters(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRegister();
  }, []);

  /* Función para manejar la edición del registro */
  const handleEdit = (id) => {
    console.log("Editar préstamo con id:", id);
    // Aquí iría la lógica para editar el préstamo
  };

  /* Función para manejar la eliminación del registro */
  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que deseas eliminar este préstamo?"
    );

    if (isConfirmed) {
      fetch(`http://localhost:5000/api/registros/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setRegisters((prevPrestamos) =>
              prevPrestamos.filter((prestamo) => prestamo.id !== id)
            );
            alert("Registro eliminado exitosamente.");
          } else {
            alert("Hubo un error al eliminar el registro.");
          }
        })
        .catch((error) => {
          console.error("Error al eliminar el registro:", error);
          alert("Hubo un problema al eliminar el registro.");
        });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ul className="divide-y divide-gray-300">
        {registros.map((registro) => (
          <li
            key={registro.id}
            className="flex items-center justify-between py-4"
          >
            {/* Nombre del alumno */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">
                {registro.alumno}
              </span>
              <span className="text-sm text-gray-600">{registro.libro}</span>
            </div>

            {/* Fechas */}
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Inicio: {new Date(registro.inicio).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                Fin: {new Date(registro.fin).toLocaleDateString()}
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(registro.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(registro.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
