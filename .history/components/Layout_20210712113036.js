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
    <header>
        
    </header>
        {children}
    <style jsx>
    {`
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