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
        background: #E5BEE6;
        margin: 0px;
    }
    `}
    </style>
    <style jsx global> 
        { `
           html{
               margin: 0px;
               font-family: system-ui;
           } 
        `}
    </style>
</div>
}

export default Layout