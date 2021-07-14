import Link from 'next/link'

export default function Footer() {
    return ( 
        <div>
            <div className="Footer">
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
                    .Footer{
                        background: linear-gradient(90deg, #844685 0, #904D82 60%, #E5AFE6);
                        display: flex;
                        justify-content: space-around;
                        border-top-right-radius: 3em;
                        border-top-left-radius: 3em;
                        padding-top: 0.5em;
                        margin-top: 0.5em;
                    }
                    .Footer a{
                        border-radius: 2px;
                        color: #E5BEE6;
                        background-color: #48487f;
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


