import React from 'react'

export default function Terapias() {
    return ( 
        <div>
            <div className="Terapias">
                <div className="Terapia__titulo">
                    <h1>Terapia Gelstat</h1>
                    <p></p>
                    <img className="Terapias__img" src="../imagenes/ILoveGestalt.png"/>
                </div>
                <div className="Terapia_modalidades">
                    <div className="TerapiaPersonal">
                        <h2>Terapia personal</h2>
                        <p></p>
                        
                    </div>
                    <div className="TerapiaNiños">
                        <h2>Terapia a niños</h2>
                        <p></p>
                        <img className="Terapia__img" src="../imagenes/niños_1280.jpg"/>
                    </div>
                    <div className="TerapiaAdolescentes">
                        <h2>Terapia a adolescentes</h2>
                        <p></p>
                        <img className="Terapia__img" src="../imagenes/jovenes_1280.jpg"/>
                    </div>
                    <div className="TerapiaFamiliar">
                        <h2>Terapia familiar</h2>
                        <p></p>
                        <img className="Terapia__img" src="../imagenes/familias_1280.jpg"/>
                    </div>
                </div>
            </div>
            
            <style>
                {`
                    .Terapias{
                        background: linear-gradient(90deg, #844685 0, #904D82 60%, #E5AFE6);
                        border-top-right-radius: 3em;
                        border-top-left-radius: 3em;
                        padding: 1em;
                        margin-top: 1em;
                        text-align: center;
                        display:grid;
                        justify-content: center;
                    }
                    .Terapias__img{
                        height: 8em;
                        width: auto;
                    }
                    .Terapia_modalidades{
                    }
                    .TerapiaPersonal{
                        max-width: 100%;
                        min-height: 1000px;
                        max-height: 1000px;
                        background-image: url("../imagenes/heart_1920.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin: 2em;
                    }
                `}
            </style>
        </div>
    )
}
