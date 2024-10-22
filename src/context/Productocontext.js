import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../api/products'; // Importa la función para cargar productos iniciales

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const initialProducts = await fetchProducts(); // Cargar productos
      setProducts(initialProducts);
    };
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
