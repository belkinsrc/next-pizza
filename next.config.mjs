/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
        port: '',
        pathname: '/image/r:584x584/**',
      },
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
        port: '',
        pathname: '/image/r:292x292/**',
      },
    ],
  },
};

export default nextConfig;
