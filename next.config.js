/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kslbd.net',
      },
    ],
  },
}

module.exports = nextConfig
