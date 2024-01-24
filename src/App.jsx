import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";

import PaginaPrincipal from './pages/PaginaPrincipal';
import EditarTarjeta from './pages/EditarTarjeta';

function App() {
  const [user, setUser] = useState(null);
  const [conectado, setConectado] = useState(false);
   {/* <MuestraTarjeta /> */}
  return (
    <Router>
    {/*<Navbar conectado={conectado}/>*/}
        
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} /> 
        <Route path="/:id/edit" element={<EditarTarjeta />} /> 
      </Routes>  
    </Router>
  )
}

export default App
