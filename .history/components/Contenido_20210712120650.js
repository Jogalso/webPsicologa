import React from 'react'

export default function Contenido() {
    return ( 
        <div>
            <div className="Header">
                <p className="InfoTerapetua">
                    <img className="InfoTerapetua__img" src="../imagenes/principal.png" />
                    <h2>Feli Scott Corbera</h2>
                </p>
            </div>
            <div className="Terapias">
                <div>
                    <h1>Terapia Gelstat</h1>
                    <p></p>
                    <img className="Terapias__img" src="../imagenes/ILoveGestalt.jpg"/>
                </div>
                
                <h2>Terapia personal</h2>
                <h2>Terapia a niños</h2>
                <h2>Terapia a adolescentes</h2>
                <h2>Terapia familiar</h2>
            </div>
            
            <style>
                {`
                    .Header{
                        background: #844685;
                        display: flex;
                        justify-content: center;
                        border-radius: 3em;
                    }
                    .InfoTerapetua{
                    }
                    .InfoTerapetua__img{
                        height: 8em;
                        width: auto;
                    }
                    .Terapias{
                        background: #904D91;
                    }
                `}
            </style>
        </div>
    )
}
