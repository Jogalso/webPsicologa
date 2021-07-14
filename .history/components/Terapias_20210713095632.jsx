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
                    <h2>Terapia a adultos</h2>
                    <div className="TerapiaPersonal"></div>

                    <h2>Terapia a niños</h2>
                    <div className="TerapiaNiños"></div>
                    
                    <h2>Terapia a adolescentes</h2>
                    <div className="TerapiaAdolescentes"></div>
                    
                    <h2>Terapia familiar</h2>
                    <div className="TerapiaFamiliar"></div>
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
                        width: 100%;
                        min-height: 1000px;
                        background-image: url("../imagenes/heart_1920.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin: 2em;
                    }
                    .TerapiaNiños{
                        width: 100%;
                        min-height: 1000px;
                        background-image: url("../imagenes/niños_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin: 2em;
                    }
                    .TerapiaAdolescentes{
                        width: 100%;
                        min-height: 1000px;
                        background-image: url("../imagenes/jovenes_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin: 2em;
                    }
                    .TerapiaFamiliar{
                        width: 100%;
                        min-height: 1000px;
                        background-image: url("../imagenes/familias_1280.jpg");
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
