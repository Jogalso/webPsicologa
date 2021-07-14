('use strict')
import Link from 'next/link';
import Head from 'next/head';
import React from 'react'

function Layout(props) {
    const {children, title} = props;
    return <div>
    <Head >
    <title>Terapia Gestalt: {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>    
    </Head>
    {/* <header>
    <Link href={vuelta} activeClassName="active">
                <a className="headerLink">
                    <img className="header_Img" src="../imagenes/back.png" />
                </a>
            </Link>
    <Link href="/">
                <a className="headerLink">
                <img  className="header_Img" src="../imagenes/home.png" />
                </a> 
    </Link>
        
    </header> */}
        {children}
    <style jsx global>
    {`
    html{
        background: #844685;
    }
    `}
    </style>
    <style jsx global> 
        { `
           header{
               body: #fff;
               background:white;
               font-family: system-ui;
           } 
        `}
    </style>
</div>
}

export default Layout