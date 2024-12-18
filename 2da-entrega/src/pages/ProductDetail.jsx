import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../products';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default ProductDetail;
