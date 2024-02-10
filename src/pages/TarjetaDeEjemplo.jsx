// src/pages/TarjetaDeEjemplo.jsx
import { useEffect, useState } from 'react';
import {useUsuario} from "../components/UsuarioContexto";
import { useNavigate } from 'react-router-dom';
import TarjetaOro from '../components/Tarjetas/TarjetaOro';

const TarjetaDeEjemplo = () => {
    const [htmlContent, setHtmlContent] = useState('');
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
        const fetchHtml = async () => {
            try {
                const response = await fetch('/tarjetaOro.html');
                const html = await response.text();
                setHtmlContent(html);
            } catch (error) {
                console.error('Error fetching HTML:', error);
            }
        };

        fetchHtml();
    }, []);

    return (
        <div>
           <TarjetaOro/>
            <button onClick={()=>manejarCompra()}>Comprar</button>
        </div>
    );
}

export default TarjetaDeEjemplo;