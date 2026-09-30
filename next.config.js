/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  async rewrites() {
    return [{ source: "/500", destination: "/server-error" }];
  },
};

module.exports = nextConfig;
