import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from './components/UsuarioContexto';
import { TarjetaProvider } from './components/TarjetaContexto'; // Importa TarjetaProvider
import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';
import TarjetaDeEjemplo from './pages/TarjetaDeEjemplo';
import GestionDeInvitados from './pages/GestionDeInvitados'; 
import VentanaLogin from "./pages/VentanaLogin";
import PaginaMisTarjetas from "./pages/PaginaMisTarjetas";
import SeleccionarTarjeta from "./pages/SeleccionarTarjeta";


function App() {
  return (
    <UsuarioProvider> {/* Envuelve tus rutas con UsuarioProvider */}
      <TarjetaProvider> {/* Añade TarjetaProvider para envolver las rutas */}
        <Router>   
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} /> 
            <Route path="/ejemplo/:id" element={<TarjetaDeEjemplo />} /> 
            <Route path="/adquirida/:id/edit" element={<EditarTarjeta />} /> 
            <Route path="/gestion-invitados" element={<GestionDeInvitados />} />
            <Route path="/mis-tarjetas" element={<PaginaMisTarjetas />} />
            <Route path="/login" element={<VentanaLogin />} /> 
            <Route path="/añadir-tarjeta" element={<SeleccionarTarjeta />} />
          </Routes>  
        </Router>
      </TarjetaProvider>
    </UsuarioProvider>
  );
}

export default App;

