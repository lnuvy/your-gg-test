/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    // domains: ['ddragon.leagueoflegends.com'],
  },
}

module.exports = nextConfig
