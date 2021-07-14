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
    <style jsx>
    {`
    html {
        background-color: #12A173;
    } 
    header{
     background: #844685;
     padding: 15px;
     text-align: center;
    }
    header a{
        color: #faf4ff;
        text-decoration: none;
        borderColor: #f3c623;
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