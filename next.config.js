/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", port: "" },
    ],
  },
  assetPrefix: "https://res.cloudinary.com",
};

module.exports = nextConfig;
