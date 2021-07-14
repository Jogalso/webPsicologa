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
                <div className="Terapia__titulo">
                    <h1>Terapia Gelstat</h1>
                    <p></p>
                    <img className="Terapias__img" src="../imagenes/ILoveGestalt.png"/>
                </div>
                <div className="Terapia_modalidades">
                    <div className="Terapia">
                        <h2>Terapia personal</h2>
                        <p></p>
                        <img className="Terapias__img" src="../imagenes/heart_1280.png"/>
                    </div>
                    <div className="Terapia">
                        <h2>Terapia a niños</h2>
                        <p></p>
                        <img className="Terapias__img" src="../imagenes/niños_1280.jpg"/>
                    </div>
                    <div className="Terapia">
                        <h2>Terapia a adolescentes</h2>
                        <p></p>
                        <img className="Terapias__img" src="../imagenes/jovenes_1280.jpg"/>
                    </div>
                    <div className="Terapia">
                        <h2>Terapia familiar</h2>
                        <p></p>
                        <img className="Terapias__img" src="../imagenes/familias_1280.jpg"/>
                    </div>
                </div>
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
                        border-radius: 3em;
                        padding: 1em;
                        margin-top: 2em;
                        text-align: center;
                        display:grid;
                        justify-content: center;
                    }
                    .Terapias__img{
                        height: 8em;
                        width: auto;
                    }
                    .Terapia_modalidades{
                        display: flex;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
    )
}
