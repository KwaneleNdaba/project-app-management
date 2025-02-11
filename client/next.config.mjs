/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-app-s3-bucket.s3.us-east-1.amazonaws.com",
      },
    ]
  }
};

export default nextConfig;
