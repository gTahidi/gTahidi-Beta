/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/(.*)',
          destination: 'https://gtahidiai.com',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  