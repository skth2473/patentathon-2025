/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sficcu.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alcorfund.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'qentelli.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
