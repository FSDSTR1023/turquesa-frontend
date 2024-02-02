import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../src/styles/tarjetaOro.css';

const TarjetaOro = ({idTarjeta}) => {
    const [infoTarjeta, setInfoTarjeta] = useState({});

    useEffect(() => {
        const countDownDate = new Date("April 1, 2024 00:00:00").getTime();
        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const cuentaRegresivaElement = document.getElementById("cuentaRegresiva");
            if (cuentaRegresivaElement) {
                cuentaRegresivaElement.innerHTML = " " + days + " días " + hours + " hs " + minutes + " min " + seconds + " seg ";
                if (distance < 0) {
                    clearInterval(x);
                    cuentaRegresivaElement.innerHTML = "Llegó el gran Día";
                }
            }
        }, 1000);
        return () => clearInterval(x);
    }, []);
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json)
            .then((data) => setInfoTarjeta(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <header className="TOSeccionPortada">
                <div className="TOTextoIntroduccion ColorTransparente">
                    <h2 id="fechaEnlace" className="fechaEnlace">{infoTarjeta?.datos_personalizados?.fechaEnlace}</h2>
                    <h1 id="Pareja" className="Pareja">{infoTarjeta?.datos_personalizados?.fechaEnlace}</h1>
                    <p id="FraseBienvenida" className="FraseBienvenida"> "Todos somos mortales,<br />
                        hasta el primer beso y la segunda copa de vino" </p>
                </div>
            </header>
            <section className="TOSeccionDos">
                <div style={{ overflow: 'hidden', width: '100%', marginTop: '-80px' }}>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: '#DAE8DE', width: '100%', height: '80px', transform: 'rotate(180deg)' }}
                    >
                        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                    </svg>
                </div>
                {/* Contenido de la sección dos */}
            </section>
            {/* Otras secciones y contenido... */}
            <section className="TOSeccionSeis">
                <div className="TOTextoIntroduccion ColorTransparente">
                    <h1 className="Pareja" style={{ fontSize: '55px' }}>Compartimos este día junto a ti</h1>
                    <p className="FraseBienvenida">Comparte tus fotos y vídeos de este hermoso día</p>
                    <p id="NombreParejaInstagram" className="FraseBienvenida"> #manuelylaura</p>
                    <img id="fotografiaPareja7" style={{ width: '100px', marginTop: '40px', marginBottom: '20px' }} src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/instagram.png?raw=true" alt="Instagram Icon" />
                    <button id="enlaceInstagram" className="TOButton">Ver en instagram</button>
                </div>
            </section>
            <footer>
                <div className="footer-boda">
                    <div style={{ opacity: '2' }}><h1>Manuel & Laura</h1></div>
                    <div>
                        <p>CONFIRMAR ASISTENCIA</p>
                        <p>CONFIRMAR ASISTENCIA A LA CELEBRACIÓN</p>
                        <p>SUGERIR CANCIÓN</p>
                        <p>AGENDAR CELEBRACIÓN</p>
                        <p>AGENDAR CEREMONIA</p>
                    </div>
                </div>
                <div className="footer-Invito">
                    <p>Desarrollado por Invito - Grupo Turquesa</p>
                    <img src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/Logo%20sin%20Fondo.png?raw=true" alt="Invito Logo" />
                </div>
            </footer>
        </>
    );
};
export default TarjetaOro;