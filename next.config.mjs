/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2th3dc33uqqn2.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
