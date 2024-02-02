import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TarjetaOro from '../components/tarjetas/tarjetaOro';

const TarjetaDeEjemplo = () => {
    const [htmlContent, setHtmlContent] = useState('');


    const manejarCompra = ()=> {
        
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

    const idtarjetaEjemplo = 12345678;
    const tarjetaName = "tarjetaEjemplo";

    return (
        <div>
            {tarjetaName === "tarjetaEjemplo" && <TarjetaOro idTarjeta={idtarjetaEjemplo} />}
            {tarjetaName === "tarjetaEjemplo1" && <TarjetaPlata idTarjeta={idtarjetaEjemplo} />}
            {tarjetaName === "tarjetaEjemplo2" && <TarjetaBronce idTarjeta={idtarjetaEjemplo} />}

            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <button onClick={()=>manejarCompra()}>Comprar</button>
        </div>
    );
}

export default TarjetaDeEjemplo;