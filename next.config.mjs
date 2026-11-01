/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // `npm run build:standalone` membuat folder .next/standalone yang bisa dijalankan
  // langsung dengan `node server.js` (cocok untuk VPS / cPanel "Setup Node.js App").
  output: process.env.STANDALONE === '1' ? 'standalone' : undefined,
};

export default nextConfig;
