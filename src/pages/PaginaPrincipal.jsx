import { useState, useEffect } from 'react';
import MuestraTarjeta from '../components/MuestraTarjeta.jsx';
import Navbar from "../components/Navbar.jsx";
import ContenidoScreenDos from '../components/ContenidoScreenDos.jsx';
import '../styles/PaginaPrincipal.css';
import { getTarjetas } from '../api/tarjeta.api.js';


const PaginaPrincipal = () => {
    var [tarjetas, setTarjetas] = useState([]);
    

    useEffect(() => {
        async function getTasksResponse() {
          try {
            const response = await getTarjetas();
            setTarjetas(response.data);
            console.log('Tarjetas: ', tarjetas);
          } catch (error) {
            console.log(error);
          }
        }
        getTasksResponse();
      }, []);

    return (
        <div>
            <section>
                <div className='screenUno'>
                    {/*componente Navbar*/}
                    <Navbar />
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
            <section className='screenTres'> {/*Lista de tarjetas*/}
                <h1>Ver modelos</h1>
                <div className='tarjetasDeMuestra'>
                    {tarjetas.map((tarjeta) => {return (<MuestraTarjeta tarjeta={tarjeta} />); })}
                </div>
                {/* <div className='buttonTarjetaOro'>
                 <TarjetaOro/>
                 </div> */}

            </section>
        </div>
    );
}

export default PaginaPrincipal;