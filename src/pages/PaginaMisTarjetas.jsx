// src/pages/PaginaMisTarjetas.jsx
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MuestraTarjeta from '../components/MuestraTarjeta';
import { useTarjeta } from '../components/TarjetaContexto';
import '../styles/PaginaMisTarjetas.css'; // Make sure you have the CSS file imported
import { useNavigate } from 'react-router-dom';

const PaginaMisTarjetas = () => {
  const { tarjetasUsuario } = useTarjeta();
  const {obtenerListaDeTarjetasDeUsuario} = useTarjeta();
  const {setTarjetaUsuario} = useTarjeta();
  const navigate = useNavigate();


  useEffect(() => {
        obtenerListaDeTarjetasDeUsuario();
    
  }, []);

  
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



        {tarjetasUsuario && tarjetasUsuario?.map((tarjeta) => {
            return (<MuestraTarjeta key={tarjeta._id} tarjeta={tarjeta} selectTarjeta={selectTarjeta}/>);
          })
        }



      </div>
    </div>
    </>
  );
};

export default PaginaMisTarjetas;
