import { createContext, useState, useContext } from 'react';
import { login, registro, logout, checkUser } from '../api/usuario.api.js';

const UsuarioContexto = createContext();

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const [authenticated, setIsAuthenticated] = useState(false);

    const logIn = async (user) => {
        console.log('User: ',user);
        const response = await login(user);
        console.log('Response: ', response);
    //    setUsuario({id:response.data._id, email:response.data.email});
    //    setIsAuthenticated(true);
        return response.data;
    }

    const logOut = async () => {
        console.log("entra logout");
        await logout();
        console.log("sale logout");
        setUsuario(null);
        setIsAuthenticated(false);
    }

    const register = async (user) => {
        console.log('User: ',user);
        const response = await registro(user);
        console.log('Response: ', response);
        setUsuario({id:response.data._id, email:response.data.email});
        setIsAuthenticated(true);
        return response.data;
    }

    const checkIfTheresUserSaved = async () => {
        console.log("Comprueba la cookie");
        const response = await checkUser();
        console.log("Respuesta de la cookie: ", response.data.usuarioRecuperado);
        if(response.data.usuarioRecuperado){
            setUsuario({id:response.data.usuarioRecuperado._id, email:response.data.usuarioRecuperado.email});
            setIsAuthenticated(true);
        }
    }

    return (
        <UsuarioContexto.Provider value={{usuario, authenticated, logIn, logOut, register, checkIfTheresUserSaved}}>
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