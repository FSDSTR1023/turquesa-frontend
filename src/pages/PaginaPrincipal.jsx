/* eslint-disable react/jsx-key */
import { useState } from 'react';
import MuestraTarjeta from '../components/MuestraTarjeta.jsx';

const PaginaPrincipal = () => {
    var [tarjetas, setTarjetas] = useState([]);

    return (
        <div>
            <section> {/*Título de la página*/}

            </section>
            <section> {/*Características de las tarjetas*/}

            </section>
            <section> {/*Lista de tarjetas*/}
                <h1>Ver modelos</h1>
                {tarjetas.map((tarjeta) => {return (<MuestraTarjeta tarjeta={tarjeta} />); })}
            </section>
        </div>
    );
}

export default PaginaPrincipal;