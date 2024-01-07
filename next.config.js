/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //RazorPay keys
    RAZORPAY_KEY: "rzp_test_hY9mD7yjmDSWAN",
    RAZORPAY_SECRET: "SskleG0E07Ofj43OcneobyjD",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giphy.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
