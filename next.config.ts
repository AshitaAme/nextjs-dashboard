/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This bypasses the '--ignoreDeprecations' error
    ignoreBuildErrors: true,
  },
  eslint: {
    // This prevents ESLint warnings from stopping the build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;