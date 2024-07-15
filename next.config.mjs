/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.builder.io', 'https://cdn.builder.io', 'b.io'],
  },
};

export default nextConfig;
