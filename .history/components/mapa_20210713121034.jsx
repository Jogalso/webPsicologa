import Link from 'next/link'
import {GoogleMap} from "react-google-maps"

export default function Footer() {
    const alcoser = {Lat: 38.792552, lng:-0.402164}
    const valencia = {Lat: 39.478026, lng:-0.394707}
    return ( 
        <div className="mapa">
            <GoogleMap defaultZoom={10} defaultCenter={alcoser} />
            <style>
                {`
                .mapa{

                }
                `}
            </style>
        </div>
    )
}


