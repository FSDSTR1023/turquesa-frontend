import React, { useEffect, useState } from 'react';
import '../../styles/TarjetaOro.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



const TarjetaOro = () => {
  const [tarjeta, setTarjeta] = useState({});

  useEffect(() => {
    const countDownDate = new Date('april 1, 2024 00:00:00').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const cuentaRegresiva = document.getElementById('cuentaRegresiva');
      if (cuentaRegresiva) {
        cuentaRegresiva.innerHTML = ` ${days}días ${hours}hs ${minutes}min ${seconds}seg `;
        if (distance < 0) {
          clearInterval(x);
          cuentaRegresiva.innerHTML = 'Llegó el gran Día';
        }
      }
    }, 1000);

    }, []);

  return (
    <>
      <header className="TOSeccionPortada">
        <div className="TOTextoIntroduccion ColorTransparente">
          <h2 id="fechaEnlace" className="fechaEnlace">1.4.2024</h2>
          <h1 id="Pareja" className="Pareja">Manuel & Laura</h1>
          <p id="FraseBienvenida" className="FraseBienvenida">"Todos somos mortales,<br /> hasta el primer beso y la segunda copa de vino"</p>
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
        <div className="cuentaRegresivaEnlace">
          <div className="circuloRegresiva">
            <div><p>Faltan</p></div>
            <div id="cuentaRegresiva" className="box-CuentaRegresiva"></div>
          </div>
        </div>
        <div className="contenido-evento">
          <div className="ceremonia">
            <div><h2>Ceremonia</h2><hr className="linea" />
              <h3>Día</h3>
              <p id="fechaEnlaceSemanaCeremonia">Sábado 1 de Abril <span id="horaCeremonia">17 h</span></p>
              <button className="TOButton">AGENDAR</button>
              <h3>Lugar</h3>
              <p id="lugarCeremonia">Parroquia Nuestra señora de Lujan</p>
              <button className="TOButton">Confirmar Asistencia</button>
              <h3>Dirección</h3>
              <p id="DireccionCeremonia">Av. Pergamino 203- Barcelona</p>
              <button className="TOButton">¿Cómo llegar?</button>
            </div>
          </div>
          <div className="celebracion">
            <div><h2>Celebracion</h2><hr className="linea" />
              <h3>Día</h3>
              <p id="fechaEnlaceSemanaCelebracion">Sábado 1 de Abril <span id="horaCelebracion">20 h</span></p>
              <button className="TOButton">AGENDAR</button>
              <h3>Lugar</h3>
              <p id="lugarCelebracion">Salon de mega fiestas</p>
              <button className="TOButton">Confirmar Asistencia</button>
              <h3>Dirección</h3>
              <p id="DireccionCelebracion">Av. Los Reartes- Barcelona</p>
              <button className="TOButton">¿Cómo llegar?</button>
            </div>
          </div>
        </div>
        <div style={{ overflow: 'hidden', width: '100%', marginBottom: '-320px', marginTop: '5px' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#DAE8DE', width: '158%', height: '280px' }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      </section>
      <section className="TOSeccionTres">
        <div id="Frase-introducción-fotografias" className="intro-fotografias">
          <h1 >Retratos de nuestro AMOR</h1>
          <p>Un minuto, un segundo, un instante que queda en la eternidad</p>
        </div>
        
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, ]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={3}
     //navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/*<SwiperSlide><img id="fotografiaPareja1" src={tarjeta.fotografiaPareja1}/></SwiperSlide>*/}
      <SwiperSlide><img id="fotografiaPareja2" src="https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_1280.jpg"/></SwiperSlide>
      <SwiperSlide><img id="fotografiaPareja3" src="https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg"/></SwiperSlide>
      <SwiperSlide><img id="fotografiaPareja4" src="https://cdn.pixabay.com/photo/2016/11/22/19/05/wedding-1850074_1280.jpg"/></SwiperSlide>
      <SwiperSlide><img id="fotografiaPareja5" src="https://cdn.pixabay.com/photo/2016/10/16/14/21/wedding-1745240_1280.jpg"/></SwiperSlide>
      <SwiperSlide><img id="fotografiaPareja6" src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg"/></SwiperSlide>
    
     
    </Swiper>
 


        <div style={{ overflow: 'hidden', width: '100%', marginTop: '100px' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#DAE8DE', width: '349%', height: '152px', transform: 'rotate(180deg)' }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      </section>
      <section className="TOSeccionCuatro">
        <div>
          <h1 >Fiesta</h1>
          <p>Hagamos juntos una fiesta única. Os dejamos algunos detalles a tener en cuenta</p>
        </div>
        <div className="TOBoxTarjetasFiesta">
          <div className="TOTarjetasFiesta">
            <h2>Música</h2>
            <img className="shake-top" src="https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/musica.png" alt="musica" />
            <p>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
            <button id="MusicaSugerida" className="TOButton">Sugerir Canción</button>
          </div>
          <div className="TOTarjetasFiesta">
            <h2>Dress Code</h2>
            <img className="shake-top" src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/corbata-de-mono.png?raw=true" alt="dress-code" />
            <p>Una orientación para tu vestuario</p>
            <button id="DressCode" className="TOButton">Ver Más</button>
          </div>
          <div className="TOTarjetasFiesta">
            <h2>Tips y Notas</h2>
            <img className="shake-top" src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/lista-de-verificacion.png?raw=true" alt="tips-notas" />
            <p>Información adicional para tener en cuenta</p>
            <button id="TipsNotas" className="TOButton">+ INFO</button>
          </div>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-180px', width: '100%' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#DAE8DE', width: '130%', height: '177px' }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      </section>
      <section className="TOSeccionCuatro" style={{ backgroundColor: '#FCF6F1' }}>
        <div style={{ overflow: 'hidden', width: '100%', backgroundColor: '#dae8de75', marginTop: '-50px', marginBottom: '0px' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#FCF6F1', width: '158%', height: '305px', transform: 'rotate(180deg)' }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
        <div style={{ backgroundColor: '#FCF6F1', width: '100%', marginTop: '-5px', paddingTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Regalos</h1>
          <p>Si deseáis regalarnos algo más que vuestra hermosa presencia...</p>
          <img className="iconoRegalo" src="https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/regalo.png" alt="regalo" />
          <button style={{ marginBottom: '30px', marginTop: '40px' }} id="regalo" className="TOButton">Ver Más</button>
        </div>
        <div style={{ overflow: 'hidden', paddingBottom: '-200px', zIndex: '1', marginBottom: '-150px', paddingTop: '30px', width: '100%' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#FCF6F1', width: '322%', height: '155px', transform: 'scaleX(-1)' }}
          >
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
            <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" opacity=".5" />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
      </section>
      <section className="TOSeccionSeis">
        <div className="TOTextoIntroduccion ColorTransparente">
          <h1 className="Pareja" style={{ fontSize: '55px' }}>Compartimos este día junto a ti</h1>
          <p className="FraseBienvenida">Comparte tus fotos y vídeos de este hermoso día</p>
          <p id="NombreParejaInstagram" className="FraseBienvenida"> #manuelylaura</p>
          <img id="fotografiaPareja7" style={{ width: '100px', marginTop: '40px', marginBottom: '20px' }} src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/instagram.png?raw=true" alt="instagram" />
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
          <img src="https://github.com/FSDSTR1023/turquesa-imagenes/blob/master/img/Logo%20sin%20Fondo.png?raw=true" alt="logo" />
        </div>
      </footer>
    </>
  );
}

export default TarjetaOro;