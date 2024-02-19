import { useTarjeta } from '../components/TarjetaContexto';
import { Link } from "react-router-dom";

const TarjetaDelUsuario = () => {
    const {tarjetaUsuario, compruebaTarjeta} = useTarjeta();

    return (
        <div>
            {compruebaTarjeta(tarjetaUsuario)}

            <Link to="/adquirida/edit">Editar tarjeta</Link>
            <Link to="/gestion-invitados">Enviar invitaciones</Link>
        
        </div>
    );
}

export default TarjetaDelUsuario;