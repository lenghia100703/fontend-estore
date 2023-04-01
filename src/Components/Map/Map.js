import 'leaflet/dist/leaflet.css';
import React, { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';

function Map() {
    const center = { lat: 21.04, lng: 105.85 };
    const ZOOM_LEVEL = 12;
    const mapRef = useRef();
    return (
        <div className="map-container">
            <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                style={{ height: 500, marginBottom: 45 }}
                className="map-inner"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    );
}

export default Map;
