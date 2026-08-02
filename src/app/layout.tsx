import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mendoza Wine Pass',
  description: 'Tours y Bodegas en Mendoza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
