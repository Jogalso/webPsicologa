import React from 'react'
import Layout from '../components/Layout'
import Contenido from '../components/Contenido'
import Header from '../components/Header'
import Terapias from '../components/Terapias'

export default function index() {
    return (
        <div>
            <Layout>
                <Header />
                <Terapias />
            </Layout>
        </div>
    )
}
