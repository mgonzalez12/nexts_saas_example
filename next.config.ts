/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Esto permite que el build se complete incluso si hay errores de ESLint.
    ignoreDuringBuilds: true,
  },
  // Otras configuraciones...
};

module.exports = nextConfig;
