import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/Productocontext';
import { fetchProductsByCategory } from '../api/products';

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { setProducts } = useContext(ProductContext);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const products = await fetchProductsByCategory(category);
    setProducts(products);
  };

  const styles = {
    container: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    label: {
      fontSize: '18px',
      marginRight: '10px',
    },
    select: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <label htmlFor="category-select" style={styles.label}>Filtrar por Categoría:</label>
      <select id="category-select" onChange={handleCategoryChange} value={selectedCategory} style={styles.select}>
        <option value="">Todas</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        {/* Agrega más opciones de categoría según las disponibles */}
      </select>
    </div>
  );
};

export default CategoryFilter;
