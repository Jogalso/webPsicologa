import React from 'react'
//#844685
export default function Header() {
    return ( 
        <div>
            <div className="Header">
                <p className="InfoTerapetua">
                    <img className="InfoTerapetua__img" src="../imagenes/principal.png" />
                    <h2>Feli Scott</h2>
                </p>
            </div>
            
            <style>
                {`
                    .Header{
                        background: linear-gradient(90deg, #844685 0, #904D82 60%, #E5AFE6);
                        display: flex;
                        justify-content: left;
                        border-bottom-right-radius: 3em;
                        border-bottom-left-radius: 3em;
                    }
                    .InfoTerapetua{
                        margin-left: 3em;
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
