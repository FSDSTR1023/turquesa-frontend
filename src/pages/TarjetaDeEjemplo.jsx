import { useEffect } from 'react';
import {useUsuario} from "../components/UsuarioContexto";
import { useNavigate } from 'react-router-dom';
import TarjetaOro from '../components/Tarjetas/TarjetaOro';

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
           <TarjetaOro/>
            <button onClick={()=>manejarCompra()}>Comprar</button>
        </div>
    );
}

export default TarjetaDeEjemplo;