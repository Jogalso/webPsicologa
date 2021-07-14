import React from 'react'

export default function Header() {
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
                    #844685
                    .Header{
                        background: linear-gradient(90deg, #844685 0, #273b47 50%, #1e5372);
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
