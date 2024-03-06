import { useEffect, useState } from 'react';
import { useTarjeta } from '../components/TarjetaContexto';
import { useAsistente } from '../components/AsistenteContexto';
import PopupConfirmarAsistencia from '../components/PopupConfirmarAsistencia';

const VentanaInvitacion = () => {
    const {tarjetaAsistente, compruebaTarjeta} = useTarjeta();
    const {asistente, recuperarAsistente} = useAsistente();
    const [popupState, setPopupState] = useState(false);

    useEffect(()=>{
        const pathname = window.location.pathname.split("/");
        const idAsistente = pathname[pathname.length-1];
        const procesoDeRecuperarAsistente = async () => {
            await recuperarAsistente(idAsistente);
        }
        procesoDeRecuperarAsistente();
    }, []);

    const abrirPopup = () => {
        console.log("Abre popup ", popupState);
        setPopupState(true);
    }


    return(
        <>
            <div >
                {compruebaTarjeta(tarjetaAsistente)}
                <div className='colocarBotones'>
                    <button className='buttomMorado' onClick={abrirPopup}>Confirmar asistencia</button>
                </div>
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