// src/components/tarjetaContexto.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTarjetasUsuario } from '../api/tarjeta.api.js'; // Ensure this API call is correctly implemented
import { useUsuario } from './UsuarioContexto'; // Ensure this is the correct path to your useUsuario hook

const TarjetaContexto = createContext();

export const TarjetaProvider = ({ children }) => {
    const [tarjetas, setTarjetas] = useState([]);
    const [selectedTarjeta, setSelectedTarjeta] = useState(null);
    const { usuario } = useUsuario(); // Get the logged-in user's info

    // Hardcoded user IDs
    const allowedUserIds = ["65aaae9a3e118e44850f8ed4", "65aac88696465bc1507232ea"];

    useEffect(() => {
        const fetchTarjetasForUser = async () => {
            // Check if the logged-in user is one of the allowed users
            if (usuario && allowedUserIds.includes(usuario.id)) {
                try {
                    const response = await getTarjetasUsuario(usuario.id);
                    setTarjetas(response.data);
                } catch (error) {
                    console.error('Error al obtener las tarjetas del usuario:', error);
                }
            } else {
                // If the user is not allowed, clear any existing tarjetas
                setTarjetas([]);
            }
        };

        fetchTarjetasForUser();
    }, [usuario]);

    return (
        <TarjetaContexto.Provider value={{ tarjetas, selectedTarjeta, setSelectedTarjeta }}>
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
