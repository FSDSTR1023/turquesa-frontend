import { useState } from "react";

const TarjetaCobre = (props) => {
    const campos = props.campos;
    const lugar = useState(campos.lugar);

    return (
        <>
            <h1>Tarjeta Cobre</h1>

            <h2>{lugar}</h2>

        </>
    );
}

export default TarjetaCobre;