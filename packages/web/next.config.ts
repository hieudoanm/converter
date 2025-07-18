import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  reactStrictMode: true,
  basePath: NODE_ENV === 'development' ? '' : '/editor',
  output: NODE_ENV === 'development' ? 'standalone' : 'export',
  distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
};

export default nextConfig;
