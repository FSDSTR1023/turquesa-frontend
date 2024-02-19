import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from './components/UsuarioContexto';
import { TarjetaProvider } from './components/TarjetaContexto'; // Importa TarjetaProvider
import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';
import TarjetaDeEjemplo from './pages/TarjetaDeEjemplo';
import TarjetaDelUsuario from './pages/TarjetaDelUsuario';
import GestionDeInvitados from './pages/GestionDeInvitados'; 
import VentanaLogin from "./pages/VentanaLogin";
<<<<<<< HEAD
import PaginaMisTarjetas from "./pages/PaginaMisTarjetas";
import SeleccionarTarjeta from "./pages/SeleccionarTarjeta";
=======
import PaginaMisTarjetas from "./pages/PaginaMisTarjetas"
import VentanaCompra from './pages/VentanaCompra';
>>>>>>> main


function App() {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> main
}

export default App;

