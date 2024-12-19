import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../products'; // Importa los productos
import ProductCard from './ProductCard'; // Suponiendo que tienes un componente ProductCard para mostrar los productos

function Catalog() {
  const { categoryId } = useParams(); // Obtenemos el parámetro de la URL
  
  // Filtramos los productos según la categoría
  const filteredProducts = products.filter(product => product.category === categoryId);

  return (
    <div>
      <h2>Catálogo de {categoryId}</h2>
      <div className="product-list">
        {/* Iteramos sobre los productos filtrados y mostramos el componente ProductCard */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
