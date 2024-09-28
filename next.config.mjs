/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/comingSoon', destination: '/pages/comingSoon' },
      { source: '/services', destination: '/pages/services' },
      { source: '/contact', destination: '/pages/contactUs' },
      { source: '/about', destination: '/pages/aboutUs' },
    ]
  },
  images: {
    domains: ['i.ibb.co','i.ibb.co.com' ],
    unoptimized: true,
  },
};

export default nextConfig;
