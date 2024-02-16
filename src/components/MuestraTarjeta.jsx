// src/components/MuestraTarjeta.jsx

import React from 'react';
import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = ({ tarjeta, onSelect }) => {
    return (
        <div className="muestraTarjetaContenedor" onClick={() => onSelect(tarjeta._id)}>
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            {/* El overlay y el botón se pueden ajustar o eliminar según tus necesidades */}
            <div className="muestraTarjetaOverlay"></div>
            {/* Si decides mantener el enlace, ajusta su comportamiento o estilo según sea necesario */}
            <div className="muestraTarjetaBotonVerTarjeta">Ver tarjeta</div>
        </div>
    );
};

export default MuestraTarjeta;
