// src/pages/PaginaMisTarjetas.jsx

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MuestraTarjeta from '../components/MuestraTarjeta';
import { useTarjeta } from '../components/TarjetaContexto';
import '../styles/PaginaMisTarjetas.css'; // Make sure you have the CSS file imported

const PaginaMisTarjetas = () => {
  const { tarjetas, obtenerListaDeTarjetas } = useTarjeta();

  useEffect(() => {
    obtenerListaDeTarjetas();
    
  }, [obtenerListaDeTarjetas]);

  console.log(tarjetas);

  // If tarjetas are not yet loaded, show a loading message or spinner
  if (!tarjetas.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Mis Tarjetas</h1>
      <div className="tarjetas-container">
        {tarjetas.map((tarjeta) => (
          <MuestraTarjeta key={tarjeta._id} tarjeta={tarjeta} />
        ))}
      </div>
    </div>
  );
};

export default PaginaMisTarjetas;
