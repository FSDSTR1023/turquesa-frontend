// src/components/tarjetaContexto.jsx
import { createContext, useState, useContext } from 'react';
import { getTarjetas, getTarjetasUsuario, generarTarjetaParaUsuario, updateTarjeta, getTarjeta } from '../api/tarjeta.api.js';
import {useUsuario} from '../components/UsuarioContexto.jsx';
import TarjetaOro from '../components/Tarjetas/TarjetaOro';
import TarjetaCobre from '../components/Tarjetas/TarjetaCobre';
import axios from 'axios';

const TarjetaContexto = createContext();

export const TarjetaProvider = ({ children }) => {
    const {usuario} = useUsuario();
    const [tarjeta, setTarjeta] = useState (null);
    const [tarjetas, setTarjetas] = useState([]);
    const [tarjetaUsuario, setTarjetaUsuario] = useState (null);
    const [tarjetasUsuario, setTarjetasUsuario] = useState ([]);
    const [tarjetaAsistente, setTarjetaAsistente] = useState (null);

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
        if (tarjeta!=null) {
            if (tarjeta.nombre=="tarjetaEjemplo")
                return(<TarjetaCobre campos={tarjeta.datos_personalizados} imagenes={tarjeta.imagenes} />);

            else if (tarjeta.nombre=="tarjetaOro")

                return (<TarjetaOro campos={tarjeta.datos_personalizados}/>);
            else 
                console.error("No se ha encontrado ninguna tarjeta con el nombre ", tarjeta.nombre);
        }
    }; 

    const compraTarjeta = async() => {
        const response = await generarTarjetaParaUsuario(tarjeta, usuario.id);
        setTarjetaUsuario(response.data);
    }

    const actualizarTarjetaUsuario = async (campos, imagenes) => {
        campos.map((campo) => {
            tarjetaUsuario.datos_personalizados[campo.nombre]=campo.valor;
        });
        if (imagenes!=undefined && imagenes!=null) {
            console.log("imagenes: ", imagenes);
            imagenes.map(async (imagen) => {
                if (imagen!=undefined && imagen!=null) {
                    const url = await uploadImage(imagen.valor);
                    tarjetaUsuario.imagenes[imagen.nombre]=url;
                }
            });
        }
        console.log("Datos a actualizar: ", tarjetaUsuario);
        await updateTarjeta(tarjetaUsuario);
    }
    
    const uploadImage = async (e) => {
        console.log("aqui esta", e)
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
        data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET); 
        console.log("aqui esta data", data) 
        try {
            console.log('Data being sent to Cloudinary:', data);
            const uploadRes = await axios({
                method:'post',
                url:import.meta.env.VITE_CLOUDINARY_URL,
                
                
                data: data
            });
            console.log('Response from Cloudinary:', uploadRes);
            const { url } = uploadRes.data;
            return url;
        } catch (err) {
            console.error("Error uploading the image", err);
        }
    };

    const obtenTarjetaAsistente = async (idTarjeta) => {
        const tarjetaRecuperada = await getTarjeta(idTarjeta);
        setTarjetaAsistente(tarjetaRecuperada.data);
    }


    return (
        <TarjetaContexto.Provider value={{ 
            tarjetas, 
            setTarjeta, tarjeta, 
            tarjetaUsuario, setTarjetaUsuario, 
            tarjetasUsuario,
            tarjetaAsistente, setTarjetaAsistente,
            obtenerListaDeTarjetas, obtenerListaDeTarjetasDeUsuario,
            compruebaTarjeta, compraTarjeta,
            actualizarTarjetaUsuario, obtenTarjetaAsistente }}>
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
