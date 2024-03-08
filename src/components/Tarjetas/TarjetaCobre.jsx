import { useState } from "react";

const TarjetaCobre = (props) => {
    const campos = props.campos;
    const imagenes = props.imagenes;
    const lugar = useState(campos.lugar);
    const imagen= useState(imagenes.imagen_prueba);

    return (
        <>
            <h1>Tarjeta Cobre</h1>

            <h2>{lugar}</h2>
            <img src={imagen[0]} />
        </>
    );
}

export default TarjetaCobre;