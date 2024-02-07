import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';
import TarjetaDeEjemplo from './pages/TarjetaDeEjemplo';
import GestionDeInvitados from './pages/GestionDeInvitados'; // Importa el nuevo componente

function App() {
  const [user, setUser] = useState(null);
  const [conectado, setConectado] = useState(false);

  return (
    <Router>
    {/*<Navbar conectado={conectado}/>*/}
        
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/ejemplo/:id" element={<TarjetaDeEjemplo />} /> 
        <Route path="/adquirida/:id/edit" element={<EditarTarjeta />} /> 
        <Route path="/gestion-invitados" element={<GestionDeInvitados />} /> {/* Nueva ruta */}
      </Routes>  
    </Router>
  )
}

export default App
