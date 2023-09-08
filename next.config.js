/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f004.backblazeb2.com",
        port: "",
      },
    ],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
