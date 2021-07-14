
import Link from 'next/link';
export default function Header() {
    
    return ( 
        <div>
            <div className="Header">
                <div className="InfoTerapetua">
                    <img className="InfoTerapetua__img" src="../imagenes/principal.png" />
                    <h2>Feli Scott</h2>
                </div>
                <div className="botones">
                    <Link href="/">
                        <a>
                            Inicio
                        </a>
                    </Link>
                    <Link href="/contacto">
                        <a>
                            Contacto
                        </a>
                    </Link>
                </div>
            </div>
            
            <style>
                {`
                    .Header{
                        background: linear-gradient(70deg,#E68620 0, #FF9524 60%, #FFB26B);
                        border-bottom-right-radius: 1.5em;
                        border-bottom-left-radius: 1.5em;
                        margin-bottom: 0.3em;
                        display: flex;
                        justify-content: space-around;
                    }
                    .InfoTerapetua{
                        color: #007099;
                        padding-top: 0.5em;
                        margin-left: 3em;
                        text-align: center;
                    }
                    .InfoTerapetua__img{
                        height: 6em;
                        width: auto;
                    }
                    .botones{
                        bottom: 0px;
                    }
                    .botones a{
                        color: white;
                        background-color: #20B1E6;
                        display: inline-block;
                        text-transform: uppercase;
                        padding: 0.8em 1em;
                        text-decoration: none;
                        line-height: 1.5em;
                    }
                `}
            </style>
        </div>
    )
}
