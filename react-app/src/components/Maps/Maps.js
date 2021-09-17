import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
};

// const center = {
//     lat: 38.9072,
//     lng: 77.0369,
// };

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

const Maps = ({ apiKey, missions }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [markersArr, setMarkersArr] = useState([])
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)


    useEffect(() => {
        const newArray = []
        if (missions?.length) {
            setLat(+missions[0]?.mission_lat)
            setLng(+missions[0]?.mission_lng)
            missions?.forEach(mission => {
                const obj = {}
                // obj['id'] = mission?.id
                obj['lat'] = mission?.mission_lat
                obj['lng'] = mission?.mission_lng
                newArray.push(obj)
            })
            setMarkersArr(newArray)
        } else {
            setLat(0)
            setLng(0)
        }
    }, [missions])

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat, lng }}
                    zoom={10}
                    options={options}
                >
                    {markersArr.map(marker => <Marker
                        key={marker.lat}
                        position={{ lat: +marker?.lat, lng: +marker?.lng }}>
                    </Marker>
                    )}
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);