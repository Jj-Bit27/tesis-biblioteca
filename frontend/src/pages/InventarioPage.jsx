import SearchList from "../components/Listados/SearchList";
import SearchInv from "../components/SearchInv";
import React, { useState, useEffect } from "react";

export default function Inventario() {
  /* Aquí va el código que estaba en el componente SearchInv */
  const [filtro, setFiltro] = useState("autores");
  const [opciones, setOpciones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [seleccion, setSeleccion] = useState("");
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Aquí va el código que estaba en el componente InventarioPage */
  useEffect(() => {
    const fetchOpciones = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/get/${filtro}`);
        const { result } = await response.json();
        setOpciones(result);
      } catch (error) {
        console.error("Error al obtener opciones:", error);
      }
    };
    fetchOpciones();
  }, [filtro]);

  /* Aquí va el código que estaba en el componente SearchInv */
  const realizarBusqueda = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/busqueda/libro?filtro=${filtro}&opcion=${seleccion}&titulo=${encodeURIComponent(
          busqueda
        )}`
      );
      const { data } = await response.json();
      console.log(data);
      setResultado(data);
    } catch (error) {
      console.error("Error al realizar búsqueda:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto mt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Buscar en el Inventario</h1>
      <SearchInv
        filtro={filtro}
        setFiltro={setFiltro}
        opciones={opciones}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        realizarBusqueda={realizarBusqueda}
        resultado={resultado}
        loading={loading}
        seleccion={seleccion}
        setSeleccion={setSeleccion}
      />
      <SearchList libros={resultado} />
    </div>
  );
}
