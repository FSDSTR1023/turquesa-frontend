import React from 'react';
import '../styles/EjemploDispositivo.css';
import '../styles/PaginaPrincipal.css';
import TarjetaOro1 from '../components/TarjetaOro1.jsx';

const EjemploDispositivo = () => {
  return (
    <div className="computer-container">
        <img
        className="computer-img"
        src="https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/dispositivoPCsombra.png" alt="dispositico pc"
    
        />
            <div className='screen-computer '>
                {/*<img src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/ejemplo%20de%20invitacion.jpg?raw=true"/>*/}
                <TarjetaOro1/>
            </div>
    </div>
  );
}

export default EjemploDispositivo;