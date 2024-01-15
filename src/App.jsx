import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css'
import MuestraTarjeta from './components/MuestraTarjeta';

function App() {
  const [user, setUser] = useState(null);
  const [conectado, setConectado] = useState(false);

  return (
    <Router>
      {/* <MuestraTarjeta /> */}
      <Navbar conectado={conectado}/>
      <Routes>
        <Route  /> 
      </Routes>  
    </Router>
  )
}

export default App
