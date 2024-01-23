/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      }
    ]
  },
  env: {
    API_URL: process.env.API_URL,
    APPLICATION_INSIGHTS_INSTRUMENTATION_KEY: process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY,
    APPLICATION_INSIGHTS_CONNECTION_STRING: process.env.APPLICATION_INSIGHTS_CONNECTION_STRING,
  }
}

module.exports = nextConfig
