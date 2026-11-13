import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fem-news-homepage',
  images: {
    // Static export has no image optimization server; the assets are already
    // exported at 2x for their display size.
    unoptimized: true,
  },
}

export default nextConfig
