/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../styles/CampoAEditar.css';

const CampoAEditar = (props) => {
    const campo = props.campo;
    console.log(campo);
    return (
        <div className="campoAEditar">
            <h3 className="campoAEditarTitulo">{campo.titulo}</h3>
            <input type="text" value={campo.valor}></input>
        </div>
    );
}

export default CampoAEditar;