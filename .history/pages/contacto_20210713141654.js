import React, {useEffect} from 'react'
import Layout from '../components/Layout'

import Header from '../components/Header'
import Mapa from '../components/Mapa'
import Datos from '../components/Datos'
import FormularioContacto from '../components/FormularioContacto'
import Footer from '../components/Footer'

var navegador = Window.navigator

export default function contacto() {
    useEffect(() => {
        return () => {
          console.log(navegador);
        };
      }, [])
    return (
        <div>
            <Layout>
                <Header />
                <Datos />
                <Mapa />
                <FormularioContacto />
                <Footer />
            </Layout>
        </div>
    )
}
