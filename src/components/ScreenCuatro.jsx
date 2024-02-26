import React from 'react';
import '../styles/ScreenCuatro.css';

const ScreenCuatro = () => {
  return (
    <>
    <div className='screen4Body'>
        <h1>Cómo obtener mi invitación Web</h1>
        <h3>Con estos sencillos pasos tendrás lista tu invitación, lista para enviar a todos tus invitados</h3>
    <div>
        <div className='contenedor-pasos-seguir'>
          <div className='mini-contenedor-pasos-seguir'>
          <img src='https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/Envelope-cuate.png' alt='imagen invitacion'/>
          <p className='pasos-numeros'>1</p>
          <p className='pasos-numero-texto'>Elige</p>
          <p className='pasos-numero-texto-2'>El modelo de invitación que más te guste</p>
          </div>
          <div className='mini-contenedor-pasos-seguir'>
          <img src='https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/Forms-cuate.png' alt='imagen rellenar formulario'/>
          <p className='pasos-numeros'>2</p>
          <hr className='linea-puntos'/>
          <p className='pasos-numero-texto'>Rellena</p>
          <p className='pasos-numero-texto-2'>El formulario con tus datos</p>
          </div>     
          <div className='mini-contenedor-pasos-seguir'>
          <img src='https://raw.githubusercontent.com/FSDSTR1023/turquesa-imagenes/master/img/Invite-cuate.png' alt='imagen que indica el envio de un mail'/>
          <p className='pasos-numeros'>3</p>
          <p className='pasos-numero-texto'>Envía</p>
          <p className='pasos-numero-texto-2'>Tantas veces como desees a tus invitados</p>
          </div>
         
        </div>

    </div>
    </div>
    </>
  )
}

export default ScreenCuatro;
