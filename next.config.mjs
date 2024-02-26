/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/no-server-nextjs-test',
  distDir: 'out'
};

export default nextConfig;
