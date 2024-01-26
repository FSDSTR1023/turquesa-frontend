/* eslint-disable react/jsx-key */
import { useState } from 'react';
import MuestraTarjeta from '../components/MuestraTarjeta.jsx';
import Navbar from "../components/Navbar.jsx";
import ContenidoScreenDos from '../components/ContenidoScreenDos.jsx';
import '../styles/PaginaPrincipal.css';
import TarjetaOro from '../components/TarjetaOro.jsx';



const PaginaPrincipal = () => {
    var [tarjetas, setTarjetas] = useState([]);
    


    return (
        <div>
            <section>
                <div className='screenUno'>
                    {/*componente Navbar*/}
                    <Navbar></Navbar>
                    <div className='encabezado'>
                        <div className='izquierda'>
                            <div className='textoBienvenida'>Tu <br/>invitación<br/> web</div>
                            <div className='rectanguloTexto'><p>Interactivas, funcionales y originales<br />Invitaciones digitales para vuestra boda <br />¡Obtén tu invitación hoy!</p></div>
                            <div className='colocarBotones'>
                                <button className='buttomMorado'>Comprar</button>
                                <button className='buttomMorado'>Ver Modelos</button> {/*insertar links */}

                            </div>
                        </div>
                        <div className='imagenMuestra'></div>
                    </div>


                </div>
            </section>
            <section> {/*Características de las tarjetas*/}
                <div className='screenDos'>
                   <div className='tituloScreenDos'>¿Qué incluyen nuestras invitaciones?</div>
                   <ContenidoScreenDos />


                </div>
            </section>
            <section> {/*Lista de tarjetas*/}
                <h1>Ver modelos</h1>
                {tarjetas.map((tarjeta) => {return (<MuestraTarjeta tarjeta={tarjeta} />); })}
                   { <MuestraTarjeta /> }
                   <div className='buttonTarjetaOro'>
                 <TarjetaOro/>
                 </div>
            </section>
        </div>
    );
}

export default PaginaPrincipal;