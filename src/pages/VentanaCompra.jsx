import { useNavigate } from 'react-router-dom';
import {useTarjeta} from '../components/TarjetaContexto';

const VentanaCompra = () => {
    const navigate = useNavigate();
    const {compraTarjeta} = useTarjeta();

    const handleBought = async () => {
        await compraTarjeta();
        navigate("/adquirida");
    }
    return (
        <button onClick={handleBought}>Procesar Compra</button>
    );
}

export default VentanaCompra;