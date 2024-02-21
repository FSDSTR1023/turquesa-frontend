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
    <>
    <div className='mis-tarjetas-page-container'>
      <Navbar />
      <div className='mis-tarjetas-container-intro'>
      <h1 className="mis-tarjetas-title">Mis Tarjetas</h1>
      <div className='imagen-mis-tarjetas-title'></div>
      </div>
      <div className="tarjetas-container">
      {tarjetas.map((tarjeta) => (
          <MuestraTarjeta key={tarjeta._id} tarjeta={tarjeta} selectTarjeta={selectTarjeta}/>
        ))}
    
      </div>
    </div>
    </>
  );
};

export default PaginaMisTarjetas;
