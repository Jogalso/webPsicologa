import React from 'react'
import Layout from '../components/Layout'

import Header from '../components/Header'
import Mapa from '../components/Mapa'
import Datos from '../components/Datos'
import FormularioContacto from '../components/FormularioContacto'
import Footer from '../components/Footer'

import {withScriptjs, withGoogleMap} from "react-google-maps"


export default function contacto() {
    const wrapedMap = withScriptjs(withGoogleMap(Mapa))
    return (
        <div>
            <Layout>
                <Header />
                <Datos />
                <wrapedMap />
                <FormularioContacto />
                <Footer />
            </Layout>
        </div>
    )
}
