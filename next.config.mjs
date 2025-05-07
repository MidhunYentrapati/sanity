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
  // Specify the output directory
  distDir: 'dist',
  // Ensure output is exported as static files
  output: 'export',
}

export default nextConfig
