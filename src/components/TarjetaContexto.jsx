import React, { createContext, useState, useContext, useEffect } from 'react';
import { obtenerTarjetas } from '../api/tarjeta.api.js';

const TarjetaContexto = createContext();

export const TarjetaProvider = ({ children }) => {
    const [tarjetas, setTarjetas] = useState([]);

    // Función para obtener las tarjetas
    const obtenerListaDeTarjetas = async () => {
        try {
            const response = await obtenerTarjetas();
            setTarjetas(response.data);
        } catch (error) {
            console.error('Error al obtener las tarjetas:', error);
        }
    }

    // Llamamos a la función para obtener las tarjetas cuando el componente se monta
    useEffect(() => {
        obtenerListaDeTarjetas();
    }, []);

    return (
        <TarjetaContexto.Provider value={{ tarjetas }}>
            {children}
        </TarjetaContexto.Provider>
    );
}

export const useTarjeta = () => {
    const context = useContext(TarjetaContexto);
    if (!context)
        throw new Error('useTarjeta debe usarse dentro de un TarjetaProvider');
    return context;
}