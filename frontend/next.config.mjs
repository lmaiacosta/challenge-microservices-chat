/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.fpinfo.com.br",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.facebook.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.instagram.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
