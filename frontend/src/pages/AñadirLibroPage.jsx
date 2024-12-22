import LibrosForm from "../components/Formularios/LibrosForm.jsx";
import AdminForm from "../components/Formularios/AdminForm.jsx";
import { useState, useEffect } from "react";
import BookList from "../components/Listados/BookList.jsx";

export default function AgregarLibros() {
  /* Estado del formulario del admin */
  const [isAuthorized, setIsAuthorized] = useState(false);

  /* Estados para el formulario de libros */
  const [autores, setAutores] = useState([]);
  const [editoriales, setEditoriales] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [autorSeleccionado, setAutorSeleccionado] = useState("");
  const [editorialSeleccionada, setEditorialSeleccionada] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  /* Estados para los datos del formulario de libros */
  const [titulo, setTitulo] = useState("");
  const [existencias, setExistencias] = useState("");
  const [paginas, setPaginas] = useState("");
  const [notificacion, setNotificacion] = useState("");
  const [error, setError] = useState("");

  // Obtener datos desde la API al cargar el componente
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const responseAutores = await fetch(
          "http://localhost:5000/api/get/autores"
        );
        const responseEditoriales = await fetch(
          "http://localhost:5000/api/get/editoriales"
        );
        const responseCategorias = await fetch(
          "http://localhost:5000/api/get/categorias"
        );

        if (
          !responseAutores.ok &&
          !responseEditoriales.ok &&
          !responseCategorias.ok
        ) {
          throw new Error("Error al obtener los datos");
        }

        const { result } = await responseAutores.json();
        setAutores(result);
        const { result: resultEditoriales } = await responseEditoriales.json();
        setEditoriales(resultEditoriales);
        const { result: resultCategorias } = await responseCategorias.json();
        setCategorias(resultCategorias);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchApi();
  }, []);

  const handleValidation = (clave) => {
    if (clave === "123456") {
      setIsAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  /* Función para enviar los datos del formulario de libros */
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoLibro = {
      titulo,
      id_autor: parseInt(autorSeleccionado),
      id_editorial: parseInt(editorialSeleccionada),
      id_categoria: parseInt(categoriaSeleccionada),
      existencias: parseInt(existencias),
      num_paginas: parseInt(paginas),
    };

    // Envía los datos del formulario a tu API
    fetch("http://localhost:5000/api/add/libro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoLibro),
    })
      .then((response) => {
        if (response.ok) {
          setNotificacion("true");
        } else {
          setNotificacion("error");
        }
        setTimeout(() => setNotificacion(""), 3000); // Notificación desaparece después de 3 segundos
      })
      .catch((error) => console.error("Error al guardar el libro:", error));
  };

  return (
    <div>
      {!isAuthorized ? (
        <div>
          <AdminForm onValidate={handleValidation} />
        </div>
      ) : (
        <div className="mt-24">
          <LibrosForm
            handleSubmit={handleSubmit}
            autores={autores}
            editoriales={editoriales}
            categorias={categorias}
            autorSeleccionado={autorSeleccionado}
            setAutorSeleccionado={setAutorSeleccionado}
            editorialSeleccionada={editorialSeleccionada}
            setEditorialSeleccionada={setEditorialSeleccionada}
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
            titulo={titulo}
            setTitulo={setTitulo}
            existencias={existencias}
            setExistencias={setExistencias}
            paginas={paginas}
            setPaginas={setPaginas}
            notificacion={notificacion}
            error={error}
          />
          <BookList />
        </div>
      )}
    </div>
  );
}
