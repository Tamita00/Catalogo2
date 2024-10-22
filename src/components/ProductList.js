import React, { useContext } from 'react';
import { ProductContext } from '../context/Productocontext';

const ProductList = () => {
  const { products, setCart } = useContext(ProductContext);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    listItem: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    productTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    productDescription: {
      margin: '10px 0',
      color: '#555',
    },
    productPrice: {
      fontSize: '18px',
      color: '#333',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Productos</h2>
      <ul style={styles.list}>
        {products.map(product => (
          <li key={product.id} style={styles.listItem}>
            <h3 style={styles.productTitle}>{product.title}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Precio: ${product.price}</p>
            <button 
              style={styles.button}
              onClick={() => addToCart(product)}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Agregar al Carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
