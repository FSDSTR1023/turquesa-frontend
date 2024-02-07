import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';
import TarjetaDeEjemplo from './pages/TarjetaDeEjemplo';
import GestionDeInvitados from './pages/GestionDeInvitados'; 
import VentanaLogin from "./pages/VentanaLogin";


function App() {

  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/ejemplo/:id" element={<TarjetaDeEjemplo />} /> 
        <Route path="/adquirida/:id/edit" element={<EditarTarjeta />} /> 
        <Route path="/gestion-invitados" element={<GestionDeInvitados />} /> {/* Nueva ruta */}
        <Route path="/login" element={<VentanaLogin />} /> 
      </Routes>  
    </Router>
  )
}

export default App
