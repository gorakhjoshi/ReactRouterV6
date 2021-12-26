import { useState, useEffect } from 'react';

import { listProducts } from './ProductsService';
import ProductCard from './ProductCard';

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsIndex;
