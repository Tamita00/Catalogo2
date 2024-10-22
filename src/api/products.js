import axios from 'axios'; //npm install axios


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
    const response = await fetch(`tu_api_url/products?search=${query}`);
    const data = await response.json();
    return data; // Asegúrate de que data sea un array de productos
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return []; // Retorna un array vacío en caso de error
  }

};
