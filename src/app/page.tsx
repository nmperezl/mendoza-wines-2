'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

interface Winery {
  id: string;
  name: string;
  zone: string;
  address: string;
  lat: number;
  lng: number;
  days: string;
  hours: string;
  whatsapp: string;
}

const MapWithNoSSR = dynamic(
  () => import('../components/MapComponent'),
  { 
    ssr: false,
    loading: () => <div style={{ height: '400px', background: '#e2e8f0', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando mapa de bodegas...</div>
  }
);

// IMPORTANTE: Sin "export" adelante
const WINERIES: Winery[] = [
  {
    id: 'catena-zapata',
    name: 'Bodega Catena Zapata',
    zone: 'Luján de Cuyo',
    address: 'Cobos s/n, Agrelo',
    lat: -33.1539,
    lng: -68.9168,
    days: 'Mar a Dom',
    hours: '10:00 a 17:00 hs',
    whatsapp: '5492610000000',
  },
  {
    id: 'zuccardi-valle-de-uco',
    name: 'Zuccardi Valle de Uco',
    zone: 'Valle de Uco',
    address: 'Costa Canal Uco s/n, San Carlos',
    lat: -33.6822,
    lng: -69.1764,
    days: 'Mié a Lun',
    hours: '10:00 a 18:00 hs',
    whatsapp: '5492610000001',
  },
  {
    id: 'enemigo-wines',
    name: 'Casa Vigil (El Enemigo)',
    zone: 'Maipú',
    address: 'Videla Aranda 7008, Chachingo',
    lat: -33.0135,
    lng: -68.7423,
    days: 'Todos los días',
    hours: '09:30 a 23:00 hs',
    whatsapp: '5492610000002',
  }
];

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');

  const filteredWineries = WINERIES.filter(
    (w) => selectedZone === 'Todas' || w.zone === selectedZone
  );

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', margin: 0, color: '#3b0764' }}>🍷 Mendoza Wine Pass</h1>
        <span style={{ background: '#f3e8ff', color: '#6b21a8', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>MVP Demo</span>
      </header>

      <section>
        <p style={{ color: '#64748b', marginTop: 0 }}>Consultá disponibilidad y coordiná visitas a bodegas en Mendoza.</p>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto' }}>
          {['Todas', 'Luján de Cuyo', 'Valle de Uco', 'Maipú'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                background: selectedZone === zone ? '#581c87' : '#ffffff',
                color: selectedZone === zone ? '#ffffff' : '#334155',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              {zone}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredWineries.map((winery) => (
              <div key={winery.id} style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ margin: '0 0 8px 0' }}>{winery.name}</h3>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b' }}>📍 {winery.address}</p>
                <p style={{ margin: '4px 0 12px 0', fontSize: '14px', color: '#64748b' }}>🕒 {winery.days} ({winery.hours})</p>
                <a
                  href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', background: '#059669', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
                >
                  💬 Consultar por WhatsApp
                </a>
              </div>
            ))}
          </div>

          <div style={{ height: '450px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <MapWithNoSSR wineries={filteredWineries} />
          </div>
        </div>
      </section>
    </main>
  );
}
