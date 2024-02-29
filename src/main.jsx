import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsuarioProvider } from './components/UsuarioContexto.jsx'
import { TarjetaProvider } from './components/TarjetaContexto.jsx'
import { AsistenteProvider } from './components/AsistenteContexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <TarjetaProvider>
        <AsistenteProvider>
          <App />
        </AsistenteProvider>
      </TarjetaProvider>
    </UsuarioProvider>
  </React.StrictMode>,
)
