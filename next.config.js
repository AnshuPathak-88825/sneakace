/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giphy.com", // Change this to a string
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Change this to a string
      },
    ],
  },
};

module.exports = nextConfig;
