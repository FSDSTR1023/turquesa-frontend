import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTarjetas } from '../api/tarjeta.api.js';

const TarjetaContexto = createContext();


export const TarjetaProvider = ({ children }) => {
    const [tarjetas, setTarjetas] = useState([]);
    const [tarjeta, setTarjeta] = useState (null);

  
    const obtenerListaDeTarjetas = async () => {
        try {
            const response = await getTarjetas();
            setTarjetas(response.data);
        } catch (error) {
            console.error('Error al obtener las tarjetas:', error);
        }
    }


    return (
        <TarjetaContexto.Provider value={{ tarjetas, obtenerListaDeTarjetas, setTarjeta, tarjeta }}>
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