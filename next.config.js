/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
