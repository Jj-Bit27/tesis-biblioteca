import { useState } from "react";

export default function PasswordForm({ onValidate }) {
  const [clave, setClave] = useState(""); // Estado para almacenar la clave ingresada

  const handleSubmit = (e) => {
    e.preventDefault();
    onValidate(clave); // Envía la clave al componente padre para validarla
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white/[0.005] bg-[#c7ccd4] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Acceso a la página
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="admin"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Clave de administrador:
            </label>
            <input
              type="password"
              id="admin"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Clave de 6 dígitos"
              value={clave}
              onChange={(e) => setClave(e.target.value)} // Actualiza el estado
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
