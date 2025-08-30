import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(
        
        res => setProducts(res.data)
    )
      .catch(err => console.error('Error:', err));
   }, []);
   const handleBuy = (product) => {
    alert(`You selected: ${product.name} for ${product.price} €`);
};

  return (
   <div>
  <h2>Our Products</h2>
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <img src={product.image_url} alt={product.name} />
        <button onClick={() => handleBuy(product)}>
          Buy Now
        </button>
      </div>
    ))}
  </div>
</div>
  );
}

export default Products;