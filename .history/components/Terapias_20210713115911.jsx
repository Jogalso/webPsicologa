import React from 'react'

export default function Terapias() {
    return ( 
        <div>
            <div className="Terapias">
                <div className="Terapia__titulo">
                    <span className="titulo">Terapia Gelstat</span>
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
                        font-family: 'RymanEco';
                        color: #E5BEE6;
                    }
                    .titulo{
                        padding-top: 1em;
                        margin-top: 0px;
                        font-family: 'RymanEco';
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
                        padding-top: 0.5em;
                        max-width: 50%;
                        display: flex;
                        justify-content: space-around;
                    }
                    .TerapiaPersonal{
                        min-height: 1000px;
                        background-image: url("../imagenes/heart_1920.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                        margin-bottom 2em;
                    }
                    .TerapiaNiños{
                        min-height: 1000px;
                        background-image: url("../imagenes/niños_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                    }
                    .TerapiaAdolescentes{
                        min-height: 1000px;
                        background-image: url("../imagenes/jovenes_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                    }
                    .TerapiaFamiliar{
                        min-height: 1000px;
                        background-image: url("../imagenes/familias_1280.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-attachment: fixed; 
                        background-position: right center;
                    }
                    
                `}
            </style>
        </div>
    )
}
