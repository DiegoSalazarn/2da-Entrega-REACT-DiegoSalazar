import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/navbar/navbar'; 
import Catalog from './pages/Catalog'; 
import ProductDetail from './pages/ProductDetail';
import ItemListContainer from './components/navbar/ItemListContainer/ItemListContainer';  

import './App.css';

function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      <div className="app-content">
        <Routes>
          {/* Página de inicio con saludo */}
          <Route 
            path="/" element={<>{/* Saludo visible */}<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />{/* para agrega más contenido*/}</>} />

            {/* Página de categorías */}
          <Route path="/category/:categoryId" element={<Catalog />} />

            {/* Página de detalle de producto */}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
