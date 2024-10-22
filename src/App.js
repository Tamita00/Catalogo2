import React from 'react';
import { ProductProvider } from './context/Productocontext'; // Importa el contexto
import ProductList from './components/ProductList';         // Lista de productos
import CategoryFilter from './components/FiltroCategoria';   // Filtro por categoría
import SearchBar from './components/Busqueda';             // Barra de búsqueda
import Cart from './components/Carrito';      

const App = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    },
    main: {
      flex: 3, // El área principal ocupa más espacio
    },
    aside: {
      flex: 1, // El carrito ocupa menos espacio
      marginLeft: '20px', // Separación entre el contenido principal y el carrito
    },
    header: {
      textAlign: 'center', // Centra el título
    }
  };

  return (
    <ProductProvider>
      <div>
        <header style={styles.header}>
          <h1>Mi Tienda</h1>
        </header>

        <SearchBar />        {/* Componente para la búsqueda */}
        <CategoryFilter />    {/* Filtro por categorías */}
        
        <div style={styles.container}>
          <main style={styles.main}>
            <ProductList />   {/* Muestra la lista de productos */}
          </main>

          <aside style={styles.aside}>
            <Cart />          {/* Carrito de compras */}
          </aside>
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
