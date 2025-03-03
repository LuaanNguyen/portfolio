/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://d2th3dc33uqqn2.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
