import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Header() {

    const [arriba, setArriba] = useState(true)

    const handleScroll = (e) => {
            let element = e.target
            if (element.scrollingElement.scrollTop < 100) {
                setArriba(true)
            }else{
                setArriba(false)
            }
            }
            
        
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [arriba])

    return ( 
        <div onScroll={handleScroll}>
            <div className={arriba ? "Header" : "HeaderScrolled" }>
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
                        border-bottom-right-radius: 0.8vw;
                        border-bottom-left-radius: 0.8vw;
                        display: flex;
                        height: 10vw;
                        position: fixed;
                        width: 100%;
                        justify-content: space-between;
                        border-bottom: 0.3vw solid #007099;
                        
                    }
                    .HeaderScrolled{
                        display: flex;
                        justify-content: space-between;
                        background-color: linear-gradient(70deg,rgba(230,134,32,.6) 0, rgba(255,149,36,.6) 60%, rgba(255,178,107,.6));
                        border-bottom: 0.3vw solid rgba(0,112,153,.6);
                        border-bottom-right-radius: 0.8vw;
                        border-bottom-left-radius: 0.8vw;
                        position: fixed;
                        width: 100%;
                        z-index: 1000;
                    }
                    .InfoTerapetua{
                        color: #007099;
                        padding-top: 0.5vw;
                        margin-left: 8vw;
                        text-align: center;
                    }
                    .InfoTerapetua__img{
                        height: 6vw;
                        width: auto;
                    }
                    .botones{
                        margin-top: 0.5vw;
                        display: flex;
                        align-items: end;
                        margin-right: 8vw;
                    }
                    .botones a{
                        color: white;
                        font-size: 1.2vw;
                        border-color: #007099;
                        background-color: #20B1E6;
                        text-transform: uppercase;
                        padding: 0.8vw 1vw;
                        margin-left: 0.1vw;
                        margin-bottom: 0.15vw;
                        text-decoration: none;
                        line-height: 1.5vw;
                    }
                `}
            </style>
        </div>
    )
}
