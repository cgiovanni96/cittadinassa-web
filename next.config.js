/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["castle-fish-cover.s3.eu-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
