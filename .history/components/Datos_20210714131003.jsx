import React from 'react'

import Mapa from '../components/Mapa'

export default function Terapias() {
        
    const handleLugar = () => {
         
    }

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
                    <button
                        className="lugar"
                        onClick={handleLugar}
                        value="Alcosser"
                    >
                        Alcosser
                    </button>
                    <button
                        className="lugar"
                        onClick={handleLugar}
                        value="Valencia"
                    >
                        Valencia
                    </button>
                    <p className="contenido">
                        <p>Cami Benamer, 1</p>
                        <p>03841 Alcocer de Planes</p>
                        <p>Alicante</p>
                        <p>España</p>
                    </p>
                    <p className="contenido">
                        <p>Campanar 11</p>
                        <p>03841 Valencia</p>
                        <p>Valencia</p>
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
            <Mapa />   
            <style>
                {`
                .datos{
                    background: linear-gradient(45deg, #FFB26B 0, #FF9524 60%, #E68620);
                    border-top-right-radius: 1.5em;
                    border-top-left-radius: 1.5em;
                    align-items: center;
                    color: #007099;
                }
                .contenedor{
                    max-width: 80%;
                    display: flex;
                    justify-content: space-around;
                    padding: 2em;
                    text-align: justify;
                }
                .titulo{
                    font-size: 1.5em;
                }
                .datos a{
                    border-radius: 2px;
                    color: #E5BEE6;
                    background-color: #48487f;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.8em 1em;
                    text-decoration: none;
                    line-height: 1.5em;
                }
                `}
            </style>
        </div>
    )
}
