import React, { createContext, useState, useContext } from 'react';

const UsuarioContexto = createContext();

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const login = (user) => {

    }

    const logout = () => {
        
    }

    const register = (user) => {
        
    }

    return (
        <UsuarioContexto.Provider value={{usuario}}>
            {children}
        </UsuarioContexto.Provider>
    );
}

export const useUsuario = () => {
    const context = useContext(UsuarioContexto);
    if(!context)
        throw new Error('useUsuario debe usarse dentro de un UsuarioProvider');
    return context;
}