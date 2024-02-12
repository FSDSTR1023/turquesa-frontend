// src/components/MuestraTarjeta.jsx

import { Link } from 'react-router-dom';
import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = (props) => {
    const tarjeta = props.tarjeta;

    return (
        <div className="muestraTarjetaContenedor"  >
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            <div className="muestraTarjetaOverlay"></div>
            <div className="muestraTarjetaBotonVerTarjeta"><a> <Link to={'/ejemplo/'+tarjeta._id}>Ver tarjeta</Link> </a></div>
        </div>
    );
}
{/*data-testid="muestraTarjetaTesting"*/}
export default MuestraTarjeta;