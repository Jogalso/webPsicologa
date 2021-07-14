import React, {useState} from 'react'

import Mapa from '../components/Mapa'

export default function Terapias() {

    const [lugar, setLugar] = useState("Alcosser")
        
    const handleLugar = (e) => {
         e.preventDefault();
         console.log(e.target.name, e.target.value);
         setLugar(e.target.value)
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
                    <button
                        className="botonesLugar"
                        name="lugar"
                        onClick={handleLugar}
                        value="Alcosser"
                    >
                        Alcosser
                    </button>
                    <button
                        className="botonesLugar"
                        name="lugar"
                        onClick={handleLugar}
                        value="Valencia"
                    >
                        Valencia
                    </button>
                    <div className="ubicacion">
                        <a href="">
                            Como llegar
                        </a>
                        {lugar == "Alcosser" ? (
                            <p className="contenido">
                            <p>Cami Benamer, 1</p>
                            <p>03841 Alcocer de Planes</p>
                            <p>Alicante</p>
                            <p>España</p>
                        </p>
                        ): (
                            <p className="contenido">
                            <p>Campanar 11</p>
                            <p>03841 Valencia</p>
                            <p>Valencia</p>
                            <p>España</p>
                        </p>
                        )}
                    </div>
                </div>
            </div> 
            <Mapa lugar={lugar} />   
            <style>
                {`
                .datos{
                    background: linear-gradient(0deg, #FFB26B 0, #FF9524 60%, #E68620);
                    border-top-right-radius: 0.8vw;
                    border-top-left-radius: 0.8vw;
                    align-items: center;
                    color: #007099;
                    font-family: 'RymanEco';
                }
                .contenedor{
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 80%;
                    display: flex;
                    justify-content: space-around;
                    padding: 2vw;
                    text-align: justify;
                }
                .titulo{
                    font-size: 2vw;
                }
                .datos a{
                    border-radius: 2px;
                    color: #E5BEE6;
                    background-color: #48487f;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.8vw 1vw;
                    text-decoration: none;
                    line-height: 1.5vw;
                }
                .botonesLugar{
                    border-radius: 2px;
                    color: #E5BEE6;
                    background-color: #48487f;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.5vw 0.5vw;
                    line-height: 1.5vw;
                    margin-bottom: 1vw;
                    margin-right: 0.2vw;
                }
                .contenido{
                }
                `}
            </style>
        </div>
    )
}
