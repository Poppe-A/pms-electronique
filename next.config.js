/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    datoCmsAPIKey: '0ff975b25dd7c96e039eb0fb0127f3'
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/services': { page: '/services' },
      '/contact': { page: '/contact' }
    }
  },
}
