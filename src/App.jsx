import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  /> 
      </Routes>  
    </Router>
  )
}

export default App
