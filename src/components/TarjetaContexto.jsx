// src/components/TarjetaContexto.jsx
import React, { createContext, useState, useContext } from 'react';
import { getTarjetasUsuario, getTarjetas } from '../api/tarjeta.api.js'; // Asegúrate de importar getTarjetas

const TarjetaContexto = createContext();

export const TarjetaProvider = ({ children }) => {
    const [tarjetas, setTarjetas] = useState([]);
    
    // Función para obtener tarjetas asociadas a un usuario específico
    const obtenerTarjetasDelUsuario = async (userId) => {
        try {
            const response = await getTarjetasUsuario(userId);
            setTarjetas(response.data);
        } catch (error) {
            console.error('Error al obtener las tarjetas del usuario:', error);
            // Considera manejar el error de manera que no interrumpa la aplicación
        }
    };

    // Función para obtener una lista general de todas las tarjetas disponibles
    const obtenerListaDeTarjetas = async () => {
        try {
            const response = await getTarjetas();
            setTarjetas(response.data);
        } catch (error) {
            console.error('Error al obtener todas las tarjetas:', error);
            // Considera manejar el error de manera que no interrumpa la aplicación
        }
    };

    return (
        <TarjetaContexto.Provider value={{ tarjetas, obtenerTarjetasDelUsuario, obtenerListaDeTarjetas }}>
            {children}
        </TarjetaContexto.Provider>
    );
};

export const useTarjeta = () => {
    const context = useContext(TarjetaContexto);
    if (!context) {
        throw new Error('useTarjeta debe usarse dentro de un TarjetaProvider');
    }
    return context;
};
