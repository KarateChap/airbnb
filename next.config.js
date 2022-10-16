/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"]
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYmFyYmFyaWFuMDI0IiwiYSI6ImNsOWJjbmhidDB6ODEzbms5d3FpbTA0OHEifQ.ca-NUJwpt2uMyLbqq9KJ8w'
  }
}

module.exports = nextConfig
