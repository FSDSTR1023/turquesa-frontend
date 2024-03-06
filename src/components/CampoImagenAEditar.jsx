import { useState } from 'react';
import '../styles/CampoAEditar.css';


const CampoAEditar = (props) => {
    console.log("Props a editar: ", props);
    const imagen = props.campo;
    const index = props.index;
    const imagenes = props.imagenes;
    const [image, setImage] = useState(imagen[1]);
    console.log("imagen del edit", imagen);

    const updateValue = (e) => {
        const files = e.target.files;
        if (files) {
            var reader = new FileReader();
            reader.onload = function (ev) {
              setImage(ev.target.result);
              imagenes[index].nombre=imagen[0];
              imagenes[index].valor=e;
            };
            reader.readAsDataURL(files[0]);
        }
    }

    return (
        <div className='datosFormulario'>
            <label className='textoLabelFormulario' htmlFor={"imagenAEditar-"+imagen[0]+index}>{imagen[0]}</label>
            <input className="textoInputFormulario" type="file" id={"imagenAEditar-"+imagen[0]+index} accept="image/png, image/gif, image/jpeg" onChange={updateValue} />
            {image && <img src={image} alt="Uploaded" style={{ width: '200px' }} />}
        </div>
    );
}

export default CampoAEditar;