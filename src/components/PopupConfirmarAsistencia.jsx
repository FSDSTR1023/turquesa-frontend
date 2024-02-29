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
                <button onClick={handleConfirmar}>Confirmo</button>
                <button onClick={handleCancelar}>Cancelo</button>
            </div>
        </>
    );
}

export default PopupConfirmarAsistencia;