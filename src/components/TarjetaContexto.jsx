// src/components/tarjetaContexto.jsx
import { createContext, useState, useContext } from 'react';
import { getTarjetas, getTarjetasUsuario, generarTarjetaParaUsuario, updateTarjeta } from '../api/tarjeta.api.js';
import {useUsuario} from '../components/UsuarioContexto.jsx';
import TarjetaOro from '../components/Tarjetas/TarjetaOro';
import TarjetaCobre from '../components/Tarjetas/TarjetaCobre';

const TarjetaContexto = createContext();

export const TarjetaProvider = ({ children }) => {
    const {usuario} = useUsuario();
    const [tarjetas, setTarjetas] = useState([]);
    const [tarjeta, setTarjeta] = useState (null);
    const [tarjetaUsuario, setTarjetaUsuario] = useState (null);
    const [tarjetasUsuario, setTarjetasUsuario] = useState ([]);

    const obtenerListaDeTarjetas = async () => {
        try {
            const response = await getTarjetas();
            setTarjetas(response.data);
        } catch (error) {
            console.error('Error al obtener todas las tarjetas:', error);
            // Considera manejar el error de manera que no interrumpa la aplicación
        }
    }

    const obtenerListaDeTarjetasDeUsuario = async () => {
        try {
            const response = await getTarjetasUsuario(usuario.id);
            setTarjetasUsuario(response.data);
        } catch (error) {
            console.error('Error al obtener las tarjetas del usuario:', error);
        }
    }

    const compruebaTarjeta = (tarjeta) => {
        console.log("Tarjeta que llega al contexto: ", tarjeta);
        if (tarjeta.nombre=="tarjetaEjemplo")
            return(<TarjetaCobre campos={tarjeta.datos_personalizados}/>);
        else if (tarjeta.nombre=="oro")
            return (<TarjetaOro campos={tarjeta.datos_personalizados}/>);
        else 
            console.error("No se ha encontrado ninguna tarjeta con el nombre ", tarjeta.nombre);
    }; 

    const compraTarjeta = async() => {
        console.log("Llega a la compra");
        const response = await generarTarjetaParaUsuario(tarjeta, usuario.id);
        console.log("Pasa la compra");
        setTarjetaUsuario(response.data);
    }

    const actualizarTarjetaUsuario = async (campos) => {
        campos.map((campo) => {
            tarjetaUsuario.datos_personalizados[campo.nombre]=campo.valor;
        });
        await updateTarjeta(tarjetaUsuario);
    }


    return (
        <TarjetaContexto.Provider value={{ 
            tarjetas, 
            setTarjeta, tarjeta, 
            tarjetaUsuario, setTarjetaUsuario, 
            tarjetasUsuario,
            obtenerListaDeTarjetas, obtenerListaDeTarjetasDeUsuario,
            compruebaTarjeta, compraTarjeta,
            actualizarTarjetaUsuario }}>
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
