import { GoogleMap , LoadScript} from "@react-google-maps/api"

export default function Mapa() {
    const alcoser = {Lat: 38.792552, lng:-0.402164}
    const valencia = {Lat: 39.478026, lng:-0.394707}
    return ( 
        <div className="mapa">
            <LoadScript googleMapsApiKey = "AIzaSyAPhMjLpbuYz155Vk0v47CqcTue5Z3Z1GM">
                <GoogleMap zoom={10} 
                            mapContainerStyle={{
                                height: "400px",
                                width: "800px"
                            }}
                            center={alcoser} 
                />  
            </LoadScript>
            <style>
                {`
                .mapa{
                    height: 100%;
                }
                
                `}
            </style>
        </div>
    )
}


