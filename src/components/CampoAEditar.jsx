import '../styles/CampoAEditar.css';

const CampoAEditar = (props) => {
    console.log("Props a editar: ", props);
    const campo = props.campo;
    const index = props.index;
    console.log(campo);
    return (
        <div>
            <label htmlFor={"campoAEditar-"+campo[0]+index}>{campo[0]}</label>
            <input id={"campoAEditar-"+campo[0]+index} type="text" value={campo[1]}></input>
        </div>
    );
}

export default CampoAEditar;