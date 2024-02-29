import { useEffect, useState } from 'react';
import { useTarjeta } from '../components/TarjetaContexto';
import { useAsistente } from '../components/AsistenteContexto';
import PopupConfirmarAsistencia from '../components/PopupConfirmarAsistencia';

const VentanaInvitacion = () => {
    const {tarjetaAsistente, compruebaTarjeta} = useTarjeta();
    const {asistente, recuperarAsistente} = useAsistente();
    const [popupState, setPopupState] = useState(false);
    const [recuperacionDeAsistenteTerminada, setRecuperacionDeAsistenteTerminada] = useState(false);

    useEffect(()=>{
        const pathname = window.location.pathname.split("/");
        console.log("pathname: ", pathname);
        const idAsistente = pathname[pathname.length-1];
        console.log("idAsistente: ", idAsistente);
        const procesoDeRecuperarAsistente = async () => {
            await recuperarAsistente(idAsistente);
            setRecuperacionDeAsistenteTerminada(true);
            console.log("Termina recuperacion");
        }
        procesoDeRecuperarAsistente();
    }, []);

    const abrirPopup = () => {
        console.log("Abre popup ", popupState);
        setPopupState(true);
    }


    return(
        <>
            <div className='VentanaInvitacionBoard'>
                {recuperacionDeAsistenteTerminada === true && 
                    compruebaTarjeta(tarjetaAsistente)}
                <button onClick={abrirPopup}>Confirmar asistencia</button>
                {popupState === true && (
                    <PopupConfirmarAsistencia
                        asistente={asistente}
                        funcionCerrar={() => {setPopupState(false)}}
                    />
                )}
            </div>
        </>
    );
}

export default VentanaInvitacion;