import { GoogleMap , LoadScript, Marker } from "@react-google-maps/api"
import { useState } from "react"

export default function Mapa({lugar}) {

    const alcosser = {lat: 38.792552, lng:-0.402164}
    const valencia = {lat: 39.478026, lng:-0.394707}

    const [ubicacion, setUbicacion] = useState(lugar)

    return ( 
        <div className="mapa">
            <LoadScript googleMapsApiKey = "AIzaSyAPhMjLpbuYz155Vk0v47CqcTue5Z3Z1GM">
                <GoogleMap zoom={10} 
                            mapContainerStyle={{
                                height: "600px",
                                width: "100%"
                            }}
                            { (ubicacion == "Alcosser") ? center={alcosser} : center={valencia}}
                >
                    <Marker
                        position={alcosser}
                    />
                    <Marker
                        position={valencia}
                    />
                </GoogleMap>  
            </LoadScript>
            <style>
                {`
                .mapa{
                    height: 100%;
                    max-width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-bottom: 4em;
                }
                
                `}
            </style>
        </div>
    )
}
