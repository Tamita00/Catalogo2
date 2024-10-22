import axios from 'axios'; //npm install axios ; npm install react-router-dom


// Obtener todos los productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Obtener productos por categoría
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
  }
};

// Buscar productos por consulta
export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`); // Cambia 'tu_api_url' por una URL válida
    return response.data.products; // Asegúrate de que devuelve un array de productos
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return []; // Retorna un array vacío en caso de error
  }
};
