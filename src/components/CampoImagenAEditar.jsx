import { useRef } from 'react';
import '../styles/CampoAEditar.css';


const CampoAEditar = (props) => {
    console.log("Props a editar: ", props);
    var campo = props.campo;
    const index = props.index;
    const campos = props.campos;
    const valorActual = useRef();
    console.log(campo);

    const updateValue = () => {
        campos[index].valor=valorActual.current.value;
    }

    return (
        <div className='datosFormulario'>
            <label className='textoLabelFormulario' htmlFor={"campoAEditar-"+campo[0]+index}>{campo[0]}</label>
            <input className="textoInputFormulario" ref={valorActual} onChange={updateValue} id={"campoAEditar-"+campo[0]+index} type="text" placeholder={campo[1]}></input>
        </div>
    );
}

export default CampoAEditar;