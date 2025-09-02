/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/github.io-1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/github.io-1' : '',
}

export default nextConfig