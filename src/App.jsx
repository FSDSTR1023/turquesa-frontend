import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';
import PaginaPrincipal from './pages/PaginaPrincipal';

function App() {
  const [user, setUser] = useState(null);
  const [conectado, setConectado] = useState(false);

  return (
    <Router>
      <Navbar conectado={conectado}/>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} /> 
      </Routes>  
    </Router>
  )
}

export default App
