import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = (props) => {
    const tarjeta = props.tarjeta;
    const selectTarjeta = props.selectTarjeta;

    const handleVerTarjeta = () => {
        selectTarjeta(tarjeta);
    }


    return (
        <div className="muestraTarjetaContenedor">
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            {/* El overlay y el botón se pueden ajustar o eliminar según tus necesidades */}
           {/* <div className="muestraTarjetaOverlay"></div>*/}
            <div className="muestraTarjetaBotonVerTarjeta"><a onClick={handleVerTarjeta}> Ver tarjeta </a></div>

        </div>
    );
};

export default MuestraTarjeta;
