import React from 'react'

export default function Terapias() {
    return ( 
        <div className="datos">
            <div className="contenedor">
                <div className="contacto">
                    <p className="titulo">
                        Datos de contacto
                    </p>
                    <a href="tel:+34657 36 36 39">
                        Llamar ahora
                    </a>
                    <p className="contenido">
                        Tel: 657 36 36 39
                    </p>
                </div>
                <div className="ubicacion">
                    <p className="titulo">
                        Dirección
                    </p>
                    <a href="tel:+34657 36 36 39">
                        Como llegar
                    </a>
                    <p className="contenido">
                        <p>Cami Benamer, 1</p>
                        <p>03841 Alcocer de Planes</p>
                        <p>Alicante</p>
                        <p>España</p>
                    </p>
                </div>
                <div className="Horario">
                    <p className="titulo">
                        Horario de apertura
                    </p>
                    <p className="contenido">
                        <p>lun:	10:00–22:00</p>
                        <p>mar:	10:00–22:00</p>
                        <p>mié:	10:00–22:00</p>
                        <p>jue:	10:00–22:00</p>
                        <p>vie:	10:00–22:00</p>
                        <p>sáb:	Cerrado</p>
                        <p>dom:	Cerrado</p>
                    </p>
                </div>
            </div>    
            <style>
                {`
                .datos{
                    background: linear-gradient(90deg, #844685 0, #904D82 60%, #E5AFE6);
                    border-top-right-radius: 3em;
                    border-top-left-radius: 3em;
                    margin-top: 1em;
                    align-items: center;
                }
                .contenedor{
                    max-width: 80%;
                    display: flex;
                    justify-content: space-between;
                    padding: 2em;
                    text-align: justify;
                }
                `}
            </style>
        </div>
    )
}
