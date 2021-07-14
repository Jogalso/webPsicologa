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
                        background: linear-gradient(70deg, #FFB26B 0, #FF9524 60%, #E68620);
                        display: flex;
                        justify-content: space-around;
                        border-top-right-radius: 1.5em;
                        border-top-left-radius: 1.5em;
                        padding-top: 0.5em;
                        margin-top: 0.3em;
                    }
                    .Footer a{
                        border-radius: 2px;
                        color: white;
                        background-color: #20B1E6;
                        display: inline-block;
                        text-transform: uppercase;
                        padding: 0.8em 1em;
                        text-decoration: none;
                        line-height: 1.5em;
                        margin-bottom: 0.15em;
                    }
                `}
            </style>
        </div>
    )
}


