import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <button onClick={()=>manejarCompra()}>Comprar</button>
        </div>
    );
}

export default TarjetaDeEjemplo;