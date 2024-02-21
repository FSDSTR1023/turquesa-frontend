import { useEffect } from 'react';
import MuestraTarjeta from '../components/MuestraTarjeta.jsx';
import Navbar from "../components/Navbar.jsx";
import ContenidoScreenDos from '../components/ContenidoScreenDos.jsx';
import '../styles/PaginaPrincipal.css';
import { useTarjeta } from '../components/TarjetaContexto.jsx';
import EjemploDispositivo from '../components/EjemploDispositivo.jsx';
import { useUsuario } from '../components/UsuarioContexto.jsx';
import { useNavigate } from 'react-router-dom';



const PaginaPrincipal = () => {
    const { tarjetas } = useTarjeta ();
    const { obtenerListaDeTarjetas } = useTarjeta ();
    const {setTarjeta} = useTarjeta();
    const {checkIfTheresUserSaved} = useUsuario();
    const navigate = useNavigate();
    
    useEffect(() => {
        // checkIfTheresUserSaved();
    });

    useEffect(() => { 
        obtenerListaDeTarjetas();

 
      }, []);
      
    const selectTarjeta = (tarjeta) => {
        console.log("Tarjeta seleccionada: ", tarjeta);
        setTarjeta(tarjeta);
        navigate("/ejemplo");
    }

    return (
        <div>
            <section>
                <div className='screenUno'>
                    {/*componente Navbar*/}
                    <Navbar />
                    <div className='encabezado'>
                        <div className='izquierda'>
                            <div className='textoBienvenida'>Tu <br/>invitación<br/> web</div>
                            <div className='rectanguloTexto1'><p>Interactivas, funcionales y originales<br />Invitaciones digitales para vuestra boda <br />¡Obtén tu invitación hoy!</p></div>
                            <div className='colocarBotones'>
                                <button className='buttomMorado'>Comprar</button>
                                <button className='buttomMorado'>Ver Modelos</button> {/*insertar links */}

                            </div>
                        </div>
                        <div className='imagenMuestra'><EjemploDispositivo/></div>
                        
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


                    { tarjetas?.map((tarjeta, index) => {return (<MuestraTarjeta key={index} tarjeta={tarjeta} selectTarjeta={selectTarjeta}/>); })}

                </div>
               {/*  { <div className='buttonTarjetaOro'>
                 <TarjetaOro/>
    </div> }*/}
    


            </section>
          
        </div>
    );
}

export default PaginaPrincipal;