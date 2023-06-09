const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
