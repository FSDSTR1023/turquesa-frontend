/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import MuestraTarjeta from '../components/MuestraTarjeta.jsx';
import Navbar from "../components/Navbar.jsx";
import '../styles/PaginaPrincipal.css';
import { getTarjetas } from '../api/tarjeta.api.js';

const PaginaPrincipal = () => {
    var [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        console.log("Aqui entra")
        async function getTasksResponse() {
          try {
            console.log("Aqui entra - 2")
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
                            <div className='rectanguloTexto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere earum praesentium veritatis deleniti quidem atque temporibus aut, quaerat impedit eos eum repudiandae vero optio delectus? Rerum expedita omnis nisi!</div>
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
                    {/* lo que incluyen las invitaciones */}

                    <div className='tituloScreenDos'>¿Qué incluyen nuestras invitaciones?</div>


                </div>
            </section>
            <section className='screenTres'> {/*Lista de tarjetas*/}
                <h1>Ver modelos</h1>
                <div className='tarjetasDeMuestra'>
                    {tarjetas.map((tarjeta) => {return (<MuestraTarjeta tarjeta={tarjeta} />); })}
                </div>
            </section>
        </div>
    );
}

export default PaginaPrincipal;