import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../products'; 
import ProductCard from './ProductCard'; 

function Catalog() {
  const { categoryId } = useParams(); 
  
  const filteredProducts = products.filter(product => product.category === categoryId);

  return (
    <div>
      <h2>Catálogo de {categoryId}</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No existe ésta categoría</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
