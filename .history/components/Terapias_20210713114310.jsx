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
                        text-align: center;
                    }
                    .Terapias h1{
                        padding-top: 1em;
                        margin-top: 0px;
                    }
                    .Terapias__img{
                        height: 6em;
                        width: auto;
                    }
                    .Terapia_modalidades{
                        width: 100%;
                    }
                    .Terapia__titulo{
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 50%;
                        display: flex;
                        justify-content: space-around;
                    }
                    .Terapia_modalidades h2{
                        margin: 0px;
                    }
                    .TerapiaPersonal{
                        min-height: 1000px;
                        background-image: url("../imagenes/heart_1920.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                    }
                    .TerapiaNiños{
                        min-height: 1000px;
                        background-image: url("../imagenes/niños_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin-top: 2em;
                    }
                    .TerapiaAdolescentes{
                        min-height: 1000px;
                        background-image: url("../imagenes/jovenes_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin-top: 2em;
                    }
                    .TerapiaFamiliar{
                        min-height: 1000px;
                        background-image: url("../imagenes/familias_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin-top: 2em;
                    }
                    
                `}
            </style>
        </div>
    )
}