/* eslint-disable react/prop-types */
import CampoAEditar from "../components/CampoAEditar.jsx";

const EditarTarjeta = (props) => {
    const campos = props.tarjeta.datos_personalizados;
    
    return (
        <div>
            <h1>Formulario de edición</h1>
            <div className="ventanaEditarTarjeta">
                {campos.map((campo)=>{<CampoAEditar campo={campo} />})}
            </div>
        </div>
    );
};

export default EditarTarjeta;