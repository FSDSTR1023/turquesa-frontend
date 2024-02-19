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
    if (usuario && usuario.id) {
      setCargando(true);
      obtenerTarjetasDelUsuario(usuario.id)
        .catch((err) => {
          console.error('Error al cargar las tarjetas:', err);
          setError('Error al cargar las tarjetas');
        })
        .finally(() => setCargando(false));
    } else {
      // Manejo para cuando no hay un usuario autenticado o el ID no está disponible
      setCargando(false);
    }
  }, [usuario, obtenerTarjetasDelUsuario]);

  if (cargando) {
    return <div>Loading...</div>;
  }
  
  const selectTarjeta = (tarjeta) => {
      console.log("Tarjeta seleccionada: ", tarjeta);
      setTarjetaUsuario(tarjeta);
      navigate("/adquirida");
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tarjetas.length) {
    return <div>No hay tarjetas disponibles.</div>;
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
