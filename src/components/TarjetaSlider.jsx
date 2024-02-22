import '../styles/tarjetaSlider.css';


const TarjetaSlider = (prop) => {
    const caracteristica= prop.caracteristica;

    // console.log('caracteristica', caracteristica);
  return (
    <div className='tarjetaSlider'>
      <div className='tarjetaLogo'><img src= {caracteristica.logo} alt='logo '/></div>
      <div className='tarjetaTitulo'><h3>{caracteristica.titulo}</h3></div>
      <div className='tarjetaDescripcion'><p>{caracteristica.descripcion}</p></div>
    </div>
  )
}

export default TarjetaSlider
