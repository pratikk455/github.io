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
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  exportPathMap: async function (defaultPathMap) {
    // Remove admin routes from static export
    const paths = { ...defaultPathMap }
    delete paths['/admin/contact-submissions']
    delete paths['/admin/projects']
    delete paths['/admin/projects/new']
    delete paths['/admin/projects/[id]/edit']
    
    return paths
  },
}

export default nextConfig