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
                `}
            </style>
        </div>
    )
}
