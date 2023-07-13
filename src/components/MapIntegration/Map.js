import { useCallback, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import './Maps.css'
import { Link } from "react-router-dom";






export default function Map() {

    // const center = { lat: 44, lng: 80 };(

    // const onLoad = useCallback(map => addMarkers(map), [])

    const markerOptions = {
        position: { lat: 28.50881307092298, lng: 77.42020657424001 }, // Set marker coordinates
        // label: 'My Marker' // Set marker label
    };



    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC27MYJJlpto2AL6s1o2kCfVE9tTzKDYV8"
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <>
            <Link to="/property">Go to Map</Link>
            <GoogleMap
                zoom={18}
                center={{ lat: 28.50881307092298, lng: 77.42020657424001 }}
                mapContainerClassName="map-container"
            // onLoad={onLoad}
            >
                <Marker
                    position={markerOptions.position}
                    //   label={markerOptions.label}
                    onClick={() => window.location.href = '/property'} // Navigate to '/map' when marker is clicked
                />
            </GoogleMap>
        </>
    );
}

