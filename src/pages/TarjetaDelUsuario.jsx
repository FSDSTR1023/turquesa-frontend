import { useTarjeta } from '../components/TarjetaContexto';
import { Link } from "react-router-dom";
import '../styles/PaginaPrincipal.css';


const TarjetaDelUsuario = () => {
    const {tarjetaUsuario, compruebaTarjeta} = useTarjeta();

    return (
        <div >
            {compruebaTarjeta(tarjetaUsuario)}
            <div className='colocarBotones BotonesTarjetadelUsuario'>
            <Link className='buttomMorado' to="/adquirida/edit">Editar tarjeta</Link>
            <Link className='buttomMorado' to="/gestion-invitados">Enviar invitaciones</Link>
            </div>
        </div>
    );
}

export default TarjetaDelUsuario;