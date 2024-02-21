import '../styles/MuestraTarjeta.css';

const MuestraTarjeta = (props) => {
    const tarjeta = props.tarjeta;
    const selectTarjeta = props.selectTarjeta;

    const handleVerTarjeta = () => {
        selectTarjeta(tarjeta);
    }

    return (
        <div className="muestraTarjetaContenedor"  >
            <img src={tarjeta.imagen_principal} alt="Imagen tarjeta" />
            <p className="muestraTarjetaNombre">{tarjeta.nombre}</p>
            <div className="muestraTarjetaOverlay"></div>
            <div className="muestraTarjetaBotonVerTarjeta"><a onClick={handleVerTarjeta}> Ver tarjeta </a></div>
        </div>
    );
}
{/*data-testid="muestraTarjetaTesting"*/}
export default MuestraTarjeta;