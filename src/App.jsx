import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';
import TarjetaDeEjemplo from './pages/TarjetaDeEjemplo';
import TarjetaDelUsuario from './pages/TarjetaDelUsuario';
import GestionDeInvitados from './pages/GestionDeInvitados'; 
import VentanaLogin from "./pages/VentanaLogin";
import PaginaMisTarjetas from "./pages/PaginaMisTarjetas"
import VentanaCompra from './pages/VentanaCompra';


function App() {

  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/ejemplo" element={<TarjetaDeEjemplo />} /> 
        <Route path="/compra" element={<VentanaCompra />} /> 
        <Route path="/adquirida" element={<TarjetaDelUsuario />} /> 
        <Route path="/adquirida/edit" element={<EditarTarjeta />} /> 
        <Route path="/gestion-invitados" element={<GestionDeInvitados />} /> {/* Nueva ruta */}
        <Route path="/mis-tarjetas" element={<PaginaMisTarjetas />} /> {/* Nueva ruta */}
        <Route path="/login" element={<VentanaLogin />} /> 
      </Routes>  
    </Router>
  )
}

export default App
