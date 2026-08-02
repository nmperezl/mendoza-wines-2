/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignorar errores de TypeScript al compilar en Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar advertencias de linter al compilar
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
