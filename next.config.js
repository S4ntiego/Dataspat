/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dy7s2xhrd/image/upload",
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
