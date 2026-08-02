'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

export default function MapComponent({ wineries }: { wineries: any[] }) {
  const center: [number, number] = [-33.2000, -68.9000];

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {wineries.map((winery) => (
        <Marker key={winery.id} position={[winery.lat, winery.lng]} icon={customIcon}>
          <Popup>
            <div style={{ padding: '4px' }}>
              <strong style={{ display: 'block', marginBottom: '4px' }}>{winery.name}</strong>
              <span style={{ fontSize: '12px', color: '#64748b' }}>📍 {winery.zone}</span>
              <a
                href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', background: '#059669', color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', padding: '6px', borderRadius: '4px', textAlign: 'center', marginTop: '8px' }}
              >
                💬 WhatsApp
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
