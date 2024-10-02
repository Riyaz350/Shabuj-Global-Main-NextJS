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
      { source: '/blogs', destination: '/pages/blogs' },
      { source: '/singleBlog', destination: '/pages/singleBlog' },
      { source: '/logIn', destination: '/pages/logIn' },
      { source: '/registration', destination: '/pages/registration' },
      { source: '/UK', destination: '/pages/studyDestinations/UK' },
      { source: '/USA', destination: '/pages/studyDestinations/USA' },
      { source: '/Australia', destination: '/pages/studyDestinations/Australia' },
      { source: '/Canada', destination: '/pages/studyDestinations/Canada' },
      { source: '/Germany', destination: '/pages/studyDestinations/Germany' },
      { source: '/singleUniversity/:id', destination: '/pages/singleUniversity/:id' },
    ]
  },
  images: {
    domains: ['i.ibb.co', 'i.ibb.co.com'],
    unoptimized: true,
  },
};

export default nextConfig;
