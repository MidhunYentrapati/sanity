/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add transpilePackages to fix potential issues with Sanity
  transpilePackages: ['sanity'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
