import React from 'react'

export default function Contenido() {
    return ( 
        <div>
            <p className="InfoTerapetua">
                <img className="InfoTerapetua__img" src="../imagenes/principal.png" />
                <h2>Feli Scott Corbera</h2>
            </p>
            <p className="Terapias">
            <h1>Terapia Gelstat</h1>
            <p></p>
            <h2>Terapia personal</h2>
            <h2>Terapia a niños</h2>
            <h2>Terapia a adolescentes</h2>
            <h2>Terapia familiar</h2></p>
            
            <style>
                {`
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
