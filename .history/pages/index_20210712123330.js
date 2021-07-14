import React from 'react'
import Layout from '../components/Layout'
import Contenido from '../components/Contenido'
import Terapias from '../components/Terapias'

export default function index() {
    return (
        <div>
            <Layout>
                <Contenido />
                <Terapias />
            </Layout>
        </div>
    )
}
