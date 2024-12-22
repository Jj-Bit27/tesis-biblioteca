import { useState } from "react";
import { FaCheckCircle, FaExclamation } from "react-icons/fa";

function Notificacion({ title, message, type }) {
  const [visible, setVisible] = useState(true);

  // Función para ocultar la notificación después de 3 segundos
  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    (visible && type == "true" && (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
        <FaCheckCircle className="text-xl" />
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    )) ||
    (visible && type == "error" && (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
        <FaExclamation className="text-xl" />
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    ))
  );
}

export default Notificacion;
