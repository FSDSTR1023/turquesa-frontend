import BotonCompra from '../components/BotonCompra';
import { useTarjeta } from '../components/TarjetaContexto';

const TarjetaDeEjemplo = () => {
    const {tarjeta, compruebaTarjeta} = useTarjeta();

    return (
        <div>
            {compruebaTarjeta(tarjeta)}

            <BotonCompra/>
        
        </div>
    );
}

export default TarjetaDeEjemplo;