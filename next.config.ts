/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brandalchemy.co.nz',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;