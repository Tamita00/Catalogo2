import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    cartButton: {
      padding: '10px 15px',
      backgroundColor: '#fff',
      color: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background-color 0.3s',
    },
    cartButtonHover: {
      backgroundColor: '#e0e0e0',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Mi Tienda</div>
      <Link to="/App.js" style={styles.cartButton}>
        Home
      </Link>
      <Link to="/carrito" style={styles.cartButton}>
        Carrito
      </Link>
    </header>
  );
};

export default Header;
