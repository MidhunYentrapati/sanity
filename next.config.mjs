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
  // Use the default .next directory instead of dist
  // Remove the output: 'export' to use server-side rendering
}

export default nextConfig
