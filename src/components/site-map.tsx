"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { company } from "@/lib/content";

const pin = L.divIcon({
  className: "esteio-pin",
  html: '<span class="esteio-pin-dot"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export function SiteMap() {
  const position: [number, number] = [company.address.lat, company.address.lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-[320px] w-full grayscale"
      scrollWheelZoom={false}
      aria-label="Map of ESTEIO Sacavém yard"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={pin}>
        <Popup>
          {company.legalName}
          <br />
          {company.address.street}, {company.address.locality}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
