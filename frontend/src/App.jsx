/* Bibliotecas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Otros archivos */
import "./App.css";
import Layout from "./components/Layout.jsx";

/* Paginas */
import AgregarRegistros from "./pages/AñadirRegistroPage.jsx";
import AgregarLibros from "./pages/AñadirLibroPage.jsx";
import Home from "./pages/HomePage.jsx";
import Inventario from "./pages/InventarioPage.jsx";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
