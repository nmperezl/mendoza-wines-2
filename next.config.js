/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Igora errores de TypeScript al compilar en Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Igora advertencias de ESLint al compilar
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
