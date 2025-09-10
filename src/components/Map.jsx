

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon-2x.png"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

function Map() {
  const position = [23.471589, 85.468068];
  return (
    <div className="w-full h-[40vh]">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false} 
        doubleClickZoom={false} 
        dragging={true} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            📍 Our Office <br /> Near Banke Bihari Market, Ormanjhi
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
