export default function Footer() {
    return ( 
        <div>
            <div className="Header">
                <Link href="/terms">
                    <a target="_blank">
                        Terminos
                    </a>
                </Link>
                <Link href="/privacy">
                    <a target="_blank">
                        Politica privacidad
                    </a>
                </Link>
                <Link href="/about">
                    <a target="_blank">
                        About
                    </a>
                </Link>
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
                        text-align: center;
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


