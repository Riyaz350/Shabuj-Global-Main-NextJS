/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/comingSoon', destination: '/pages/comingSoon' },
      { source: '/services', destination: '/pages/services' },
      { source: '/contact', destination: '/pages/contactUs' },
      { source: '/about', destination: '/pages/aboutUs' },
      { source: '/events', destination: '/pages/events' },
      { source: '/singleEvent', destination: '/pages/singleEvent' },
      { source: '/blogs', destination: '/pages/blogs'},
      { source: '/singleBlog', destination: '/pages/singleBlog'},
      { source: '/logIn', destination: '/pages/logIn'},
      { source: '/registration', destination: '/pages/registration'},
    ]
  },
  images: {
    domains: ['i.ibb.co','i.ibb.co.com' ],
    unoptimized: true,
  },
};

export default nextConfig;
