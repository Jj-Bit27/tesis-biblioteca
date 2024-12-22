import AdminForm from "../components/Formularios/AdminForm.jsx";
import { useState, useEffect } from "react";
import RegistroForm from "../components/Formularios/RegistroForm.jsx";
import RegisterList from "../components/Listados/RegisterList.jsx";

export default function AgregarRegistros() {
  /* Estados para el formulario de admin */
  const [isAuthorized, setIsAuthorized] = useState(false);

  /* Estados para el formulario de registro */
  const [idAlumno, setIdAlumno] = useState("");
  const [idLibro, setIdLibro] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaTermino, setFechaTermino] = useState("");
  const [idEntregado, setIdEntregado] = useState("");

  /* Estados para los datos de la base de datos */
  const [alumnos, setAlumnos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [entregados, setEntregados] = useState([]);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  /* Verificacion del formulario del admin */
  const handleValidation = (clave) => {
    if (clave === "123456") {
      setIsAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  /* Obtener los datos para ponerlo en el dropmenu */
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const responseAlumnos = await fetch(
          "http://localhost:5000/api/get/alumnos"
        );
        const responseLibros = await fetch(
          "http://localhost:5000/api/get/libros"
        );
        const responseEntregados = await fetch(
          "http://localhost:5000/api/entregados/gets"
        );

        if (
          !responseAlumnos.ok &&
          !responseLibros.ok &&
          !responseEntregados.ok
        ) {
          throw new Error("Error al obtener los datos");
        }
        const { result } = await responseAlumnos.json();
        setAlumnos(result);
        const { result: resultLibros } = await responseLibros.json();
        setLibros(resultLibros);
        const { result: resultEntregados } = await responseEntregados.json();
        setEntregados(resultEntregados);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchApi();
  }, []);

  /* Guardar los datos en la base de datos */
  const guardarRegistro = (e) => {
    e.preventDefault();
    const nuevoRegistro = {
      id_alumno: idAlumno,
      id_libro: idLibro,
      inicio: fechaInicio,
      fin: fechaTermino,
      id_entregado: idEntregado,
    };

    fetch(`http://localhost:5000/api/registros/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoRegistro),
    })
      .then((response) => {
        if (response.ok) {
          setNotification("true");
        } else {
          setNotification("error");
        }
        setTimeout(() => setNotification(""), 3000); // Notificación desaparece después de 3 segundos
      })
      .catch((error) => {
        console.error("Error al guardar el registro:", error);
        setNotification("Error al guardar el registro.");
      });
  };

  return (
    <div>
      {!isAuthorized ? (
        <div>
          <AdminForm onValidate={handleValidation} />
        </div>
      ) : (
        <div className="mt-24">
          <RegistroForm
            idAlumno={idAlumno}
            idLibro={idLibro}
            idEntregado={idEntregado}
            setIdAlumno={setIdAlumno}
            setIdLibro={setIdLibro}
            setFechaInicio={setFechaInicio}
            setFechaTermino={setFechaTermino}
            setIdEntregado={setIdEntregado}
            alumnos={alumnos}
            libros={libros}
            entregados={entregados}
            guardarRegistro={guardarRegistro}
            notification={notification}
            error={error}
          />
          <RegisterList />
        </div>
      )}
    </div>
  );
}
