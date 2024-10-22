import React from 'react';
import { ProductProvider } from './context/Productocontext'; // Importa el contexto
import ProductList from './components/ProductList';         // Lista de productos
import CategoryFilter from './components/FiltroCategoria';   // Filtro por categoría
import SearchBar from './components/Busqueda';             // Barra de búsqueda
import Cart from './components/Carrito';                 
import Header from './components/Header';    

const App = () => {
  return (


    
    <ProductProvider>
      <div>
        <header>
          <Header/>
          
        </header>
        <SearchBar />        {/* Componente para la búsqueda */}
          <CategoryFilter />    {/* Filtro por categorías */}
        <main>
          <ProductList />       {/* Muestra la lista de productos */}
        </main>

        <aside>
          <Cart />              {/* Carrito de compras */}
        </aside>
      </div>
    </ProductProvider>
  );
};

export default App;
