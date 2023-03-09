/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 외부 참조 활성화
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
