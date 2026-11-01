/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // `npm run build:standalone` membuat folder .next/standalone yang bisa dijalankan
  // langsung dengan `node server.js` (cocok untuk VPS / cPanel "Setup Node.js App").
  ...(process.env.STATIC_EXPORT === '1'
    ? {
        // Mode GitHub Pages: situs statis penuh (tanpa server / API route)
        output: 'export',
        trailingSlash: true,
        images: { unoptimized: true },
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
      }
    : { output: process.env.STANDALONE === '1' ? 'standalone' : undefined }),
};

export default nextConfig;
