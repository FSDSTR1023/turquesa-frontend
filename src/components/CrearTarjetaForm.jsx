// Adaptación de CrearTarjetaForm.jsx para la personalización
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Para obtener el ID de la tarjeta desde la URL
import { crearTarjeta, getTarjeta } from '../api/tarjeta.api'; // Asegúrate de que estas funciones estén implementadas

const CrearTarjetaForm = () => {
    const [tarjeta, setTarjeta] = useState(null);
    const location = useLocation();
    const tarjetaId = location.pathname.split("/")[2]; // Asume una ruta como /personalizar-tarjeta/:id

    useEffect(() => {
        const cargarTarjeta = async () => {
            try {
                const tarjetaObtenida = await getTarjeta(tarjetaId);
                setTarjeta(tarjetaObtenida);
                // Inicializa el formulario con los datos de la tarjeta, si es necesario
            } catch (error) {
                console.error('Error al cargar la tarjeta para personalizar:', error);
            }
        };

        if (tarjetaId) {
            cargarTarjeta();
        }
    }, [tarjetaId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí manejar la lógica de actualización de la tarjeta con datos personalizados
    };

    // Si aún no hay tarjeta cargada, puedes mostrar un mensaje de carga o similar
    if (!tarjeta) return <div>Cargando...</div>;

    return (
        <form onSubmit={handleSubmit}>
            {/* Campos del formulario para personalizar la tarjeta */}
        </form>
    );
};
