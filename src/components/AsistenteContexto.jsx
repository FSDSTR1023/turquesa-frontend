import { createContext, useState, useContext } from 'react';
import { getAsistente, updateAsistente } from '../api/asistente.api';
import { useTarjeta } from './TarjetaContexto';

const AsistenteContexto = createContext();

export const AsistenteProvider = ({children}) => {
    const [asistente, setAsistente] = useState(null);
    const {obtenTarjetaAsistente} = useTarjeta();

    const recuperarAsistente = async (asistenteId) => {
        const asistenteRecuperado = await getAsistente(asistenteId);
        console.log("Asistente recuperado: ", asistenteRecuperado);
        setAsistente(asistenteRecuperado.data);
        await obtenTarjetaAsistente(asistenteRecuperado.data.id_tarjeta);
    }

    const actualizarAsistente = async () => {
        await updateAsistente(asistente);
    }

    return (
        <AsistenteContexto.Provider value={{ asistente, setAsistente, recuperarAsistente, actualizarAsistente }}>
            {children}
        </AsistenteContexto.Provider>
    );
}

export const useAsistente = () => {
    const context = useContext(AsistenteContexto);
    if(!context)
        throw new Error('useAsistente debe usarse dentro de un AsistenteProvider');
    return context;
}