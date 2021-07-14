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
            
            <p className="Terapias">
            <h1>Terapia Gelstat</h1>
            <p></p>
            <h2>Terapia personal</h2>
            <h2>Terapia a niños</h2>
            <h2>Terapia a adolescentes</h2>
            <h2>Terapia familiar</h2></p>
            
            <style>
                {`
                    .Header{
                        background: #844685;
                        padding: 0,3em;
                    }
                    .InfoTerapetua{
                        display: flex;
                    }
                    .InfoTerapetua__img{
                        height: 10em;
                        width: auto;
                    }
                `}
            </style>
        </div>
    )
}
