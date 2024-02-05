import { createContext, useState, useContext } from 'react';
import { login, registro } from '../api/usuario.api.js';

const UsuarioContexto = createContext();

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const [authenticated, setIsAuthenticated] = useState(false);

    const logIn = async (user) => {
        console.log('User: ',user);
        const response = await login(user);
        console.log('Response: ', response);
        setUsuario({id:response.data._id, email:response.data.email});
        setIsAuthenticated(true);
        return response.data;
    }

    const logOut = () => {
        setUsuario(null);
        setIsAuthenticated(false);
    }

    const register = async (user) => {
        console.log('User: ',user);
        const response = await registro(user);
        setUsuario({id:response.data._id, email:response.data.email});
        setIsAuthenticated(true);
        return response.data;
    }

    return (
        <UsuarioContexto.Provider value={{usuario, authenticated, logIn, logOut, register}}>
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