import { useEffect, useState } from "react";
import CampoAEditar from "../components/CampoAEditar.jsx";
import CampoImagenAEditar from "../components/CampoImagenAEditar.jsx";
import { useTarjeta } from '../components/TarjetaContexto';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import "../styles/EditarTarjetaFormulario.css";
import ImageUpload from "../components/ImageUpload.jsx";


const EditarTarjeta = () => {
    const {tarjetaUsuario} = useTarjeta();
    const {actualizarTarjetaUsuario} = useTarjeta();
    const navigate = useNavigate();
    const [campos, setCampos] = useState([]);

    useEffect(()=> {
        const datos = tarjetaUsuario.datos_personalizados;
        const camposTemp = campos;
        console.log("Datos personalizados:", datos);
        var iterator = 0;
        for (const [key, value] of Object.entries(datos)) {
            camposTemp[iterator]={nombre:key, valor:value};
            iterator++;
        }
        setCampos(camposTemp);
        console.log("Campos final: ", campos);
        campos.map((campo, index)=>{console.log('Campo '+index+' del map: ', campo)});
    }, []);
    
    console.log("Campos final 2: ", campos);

    const saveChanges = async () => {
        await actualizarTarjetaUsuario(campos);
        navigate("/adquirida");
    }

    return (
        <>
        <div className="editarTarjetaFondoBody">
        <Navbar />
        <div className="paginaEditarTarjetaContainer">
            <h1>Formulario de edición</h1>
            <div className="ventanaEditarTarjetaF">
                <div className="formularioContainerF">
                {
                    Object.entries (tarjetaUsuario.datos_personalizados).map((value, index)=> {
                        return(<CampoAEditar key={index} campo={value} index={index} campos={campos}/>)
                    })
                    
                }
                {
                    Object.entries (tarjetaUsuario.imagenes).map((value, index)=> {
                        return(<CampoImagenAEditar key={index} campo={value} index={index} campos={campos}/>)
                    })
                    
                }
               
               <ImageUpload/>
                
                
                {/* {campos.map((campo, index)=>{if(index<campos.length-1){return(<CampoAEditar key={index} campo={campo} index={index} />)}})} */}
                </div>
                <div className="colocarBotones">
                <button className="buttomMorado" onClick={saveChanges}>Guardar cambios</button>
                <button className="buttomMorado"><Link to="/adquirida">Volver</Link></button>
                 
                </div>
            </div>
        
        </div>
        </div>
        </>
    );
};

export default EditarTarjeta;