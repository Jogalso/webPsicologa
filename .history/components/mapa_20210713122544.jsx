import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

export default function Mapa() {
    const alcoser = {Lat: 38.792552, lng:-0.402164}
    const valencia = {Lat: 39.478026, lng:-0.394707}
    return ( 
        <div className="mapa">
            <GoogleMap defaultZoom={10} 
                        mapContainerStyle={{
                            height: "400px",
                            width: "800px"
                        }}
                        defaultCenter={alcoser} 
            />
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


