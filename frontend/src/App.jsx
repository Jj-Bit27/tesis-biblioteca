/* Bibliotecas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Otros archivos */
import "./App.css";
import Layout from "./components/Navegacion/Layout.jsx";

/* Paginas */
import AgregarRegistros from "./pages/AñadirRegistroPage.jsx";
import AgregarLibros from "./pages/AñadirLibroPage.jsx";
import Home from "./pages/HomePage.jsx";
import Inventario from "./pages/InventarioPage.jsx";
import InventarioLibros from "./pages/InventarioLibrosPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/agregar-registro" element={<AgregarRegistros />} />
          <Route path="/agregar-libro" element={<AgregarLibros />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/libros" element={<InventarioLibros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
