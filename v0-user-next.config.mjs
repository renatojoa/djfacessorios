/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/djf-acessorios' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/djf-acessorios/' : '',
  trailingSlash: true,
}

export default nextConfig
