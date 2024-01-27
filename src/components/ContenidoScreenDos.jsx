/* eslint-disable react/jsx-key */
import React from 'react';
import TarjetaSlider from './TarjetaSlider';
import { caracteristicas } from './CaracterísticasDeTarjetas';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const ContenidoScreenDos = () => {
  
console.log("caracteristicas", caracteristicas)
  return (
<>
    <div className='slider'>
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
    
     
    {caracteristicas.map((caracteristica)=>{return(<SwiperSlide><TarjetaSlider caracteristica={caracteristica}/></SwiperSlide> )})}

    
      </Swiper>
      </div>

  </>

  )
}

export default ContenidoScreenDos;
