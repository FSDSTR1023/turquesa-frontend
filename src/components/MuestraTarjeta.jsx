<<<<<<< HEAD
// src/components/MuestraTarjeta.jsx

import React from 'react';
import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = ({ tarjeta, onSelect }) => {
=======
import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = (props) => {
    const tarjeta = props.tarjeta;
    const selectTarjeta = props.selectTarjeta;

    const handleVerTarjeta = () => {
        selectTarjeta(tarjeta);
    }

>>>>>>> main
    return (
        <div className="muestraTarjetaContenedor" onClick={() => onSelect(tarjeta._id)}>
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            {/* El overlay y el botón se pueden ajustar o eliminar según tus necesidades */}
            <div className="muestraTarjetaOverlay"></div>
<<<<<<< HEAD
            {/* Si decides mantener el enlace, ajusta su comportamiento o estilo según sea necesario */}
            <div className="muestraTarjetaBotonVerTarjeta">Ver tarjeta</div>
=======
            <div className="muestraTarjetaBotonVerTarjeta"><a onClick={handleVerTarjeta}> Ver tarjeta </a></div>
>>>>>>> main
        </div>
    );
};

export default MuestraTarjeta;
