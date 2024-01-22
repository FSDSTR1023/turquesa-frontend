import { Link } from 'react-router-dom';
import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = (tarjeta) => {

    return (
        <div className="muestraTarjetaContenedor">
            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            <div className="muestraTarjetaOverlay"></div>
            <div className="muestraTarjetaBotonVerTarjeta"><a href="#"> Ver tarjeta </a></div>
        </div>
    );
}

export default MuestraTarjeta;