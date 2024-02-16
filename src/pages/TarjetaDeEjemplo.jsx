import { useEffect, useState } from 'react';
import {useUsuario} from "../components/UsuarioContexto";
import { useNavigate } from 'react-router-dom';

const TarjetaDeEjemplo = () => {
    const {authenticated} = useUsuario();
    const navigate = useNavigate();


    const manejarCompra = ()=> {
        if (authenticated) {
            // navigate();
        } else {
            navigate("/login");
        }
    }

    useEffect(() => {
    }, []);

    return (
        <div>
            
            <button onClick={()=>manejarCompra()}>Comprar</button>
        </div>
    );
}

export default TarjetaDeEjemplo;