// src/pages/PaginaMisTarjetas.jsx

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MuestraTarjeta from '../components/MuestraTarjeta';
import { useTarjeta } from '../components/TarjetaContexto';
import '../styles/PaginaMisTarjetas.css'; // Make sure you have the CSS file imported
import { useNavigate } from 'react-router-dom';

const PaginaMisTarjetas = () => {
  const { tarjetas, obtenerListaDeTarjetas } = useTarjeta();
  const {setTarjetaUsuario} = useTarjeta();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerListaDeTarjetas();
    
  }, [obtenerListaDeTarjetas]);

  console.log(tarjetas);

  // If tarjetas are not yet loaded, show a loading message or spinner
  if (!tarjetas.length) {
    return <div>Loading...</div>;
  }
  
  const selectTarjeta = (tarjeta) => {
      console.log("Tarjeta seleccionada: ", tarjeta);
      setTarjetaUsuario(tarjeta);
      navigate("/adquirida");
  }

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Mis Tarjetas</h1>
      <div className="tarjetas-container">
        {tarjetas.map((tarjeta) => (
          <MuestraTarjeta key={tarjeta._id} tarjeta={tarjeta} selectTarjeta={selectTarjeta}/>
        ))}
      </div>
    </div>
  );
};

export default PaginaMisTarjetas;
