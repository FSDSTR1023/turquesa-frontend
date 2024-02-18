/* eslint-disable react/prop-types */
import CampoAEditar from "../components/CampoAEditar.jsx";
import { useTarjeta } from '../components/TarjetaContexto';
import {Link} from 'react-router-dom';

const EditarTarjeta = () => {
    const {tarjetaUsuario} = useTarjeta();
    const campos = tarjetaUsuario.campos_personalizados;
    
    return (
        <div>
            <h1>Formulario de edición</h1>
            <div className="ventanaEditarTarjeta">
                {campos.map((campo)=>{<CampoAEditar campo={campo} />})}
            </div>
            <button><Link to="/adquirida">Guardar cambios</Link></button>
            <button><Link to="/adquirida">Volver</Link></button>
        </div>
    );
};

export default EditarTarjeta;