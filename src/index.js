import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App'; // Asegúrate de que esta ruta sea correcta

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // Asegúrate de que 'root' sea el ID de tu elemento en el HTML
);
