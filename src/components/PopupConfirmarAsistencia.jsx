import "../styles/PopupConfirmarAsistencia.css"
import { useAsistente } from "./AsistenteContexto";

const PopupConfirmarAsistencia = (props) => {
    const {asistente} = props;
    const {funcionCerrar} = props;
    const {actualizarAsistente} = useAsistente();

    const handleConfirmar = async () => {
        asistente.confirmacion = 'S';
        await actualizarAsistente(asistente);
        funcionCerrar();
    }

    const handleCancelar = async () => {
        asistente.confirmacion = 'N';
        await actualizarAsistente(asistente);
        funcionCerrar();
    }

    return (
        <>
            <div className="ConfirmarAsistenciaOverlay" onClick={funcionCerrar} />
            <div className="ConfirmarAsistenciaPopup" onClick={funcionCerrar}>
                <div>
                    <p>{asistente.nombre}, ¿aceptas o cancelas la invitación?</p>
                </div>
                <div className="ConfirmarAsistenciaPopupBotones" >
                    <button className="buttomMorado" onClick={handleConfirmar}>Confirmo</button>
                    <button className="buttomMorado" onClick={handleCancelar}>Cancelo</button>
                </div>
            </div>
        </>
    );
}

export default PopupConfirmarAsistencia;