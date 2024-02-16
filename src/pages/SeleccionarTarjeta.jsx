// SeleccionarTarjeta.jsx
// Esto va en Screen 4 
import React, { useEffect, useState } from 'react';
import { getAllTarjetas } from '../api/tarjeta.api';
import MuestraTarjeta from '../components/MuestraTarjeta';
import { useNavigate } from 'react-router-dom';
import '../styles/SeleccionarTarjeta.css'; // Ajusta la ruta según sea necesario


const SeleccionarTarjeta = () => {
    const [tarjetas, setTarjetas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Definición de cargarTarjetas dentro de useEffect para evitar efectos no deseados.
        const cargarTarjetas = async () => {
            try {
                const respuesta = await getAllTarjetas();
                console.log("Respuesta de getAllTarjetas:", respuesta);
                setTarjetas(respuesta.data || []);
            } catch (error) {
                console.error('Error al cargar tarjetas:', error);
            }
        };

        cargarTarjetas();
    }, []); // El arreglo vacío asegura que este efecto se ejecute solo una vez al montar

    const handleSeleccionar = (tarjetaId) => {
        navigate(`/personalizar-tarjeta/${tarjetaId}`);
    };

    return (
      <div className="grid-container">
          {tarjetas.map((tarjeta) => (
              <div key={tarjeta._id} className="tarjeta" onClick={() => handleSeleccionar(tarjeta._id)}>
                  <MuestraTarjeta tarjeta={tarjeta} />
              </div>
          ))}
      </div>
  );  
};

export default SeleccionarTarjeta;
