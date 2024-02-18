// src/components/MuestraTarjeta.jsx

import { Link } from 'react-router-dom';
import '../styles/MuestraTarjeta.css';
import { useTarjeta } from './TarjetaContexto';

const MuestraTarjeta = (props) => {
    const tarjeta = props.tarjeta;
    const {setTarjeta} = useTarjeta();

    const selectTarjeta = () => {
        console.log("Tarjeta seleccionada: ", tarjeta);
        setTarjeta(tarjeta);
    }

    return (
        <div className="muestraTarjetaContenedor"  >
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            <div className="muestraTarjetaOverlay"></div>
            <div className="muestraTarjetaBotonVerTarjeta"><a onClick={selectTarjeta}> <Link to={'/ejemplo'}>Ver tarjeta</Link> </a></div>
        </div>
    );
}
{/*data-testid="muestraTarjetaTesting"*/}
export default MuestraTarjeta;