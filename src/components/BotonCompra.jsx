import '../styles/BotonCompra.css';
import {useUsuario} from "../components/UsuarioContexto";
import { useNavigate } from 'react-router-dom';

const BotonCompra = () => {
  
  const {authenticated} = useUsuario();
    const navigate = useNavigate();

  const manejarCompra = ()=> {
    if (authenticated) {
        navigate("/compra");
    } else {
        navigate("/login");
    }
}
  return (
    <div>
   
      <button className='botonCompra' onClick={()=>manejarCompra()}><p>Comprar</p></button>
    </div>
  )
}

export default BotonCompra
