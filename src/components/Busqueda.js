import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/Productocontext';
import { searchProducts } from '../api/products';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setProducts } = useContext(ProductContext);

  const handleSearch = async () => {
    const products = await searchProducts(query);
    setProducts(products);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px auto',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
    },
    input: {
      flex: '1',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginRight: '10px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
        style={styles.input}
      />
      <button 
        onClick={handleSearch} 
        style={styles.button} 
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
