/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/dist' : '',
  basePath: isProd ? '/dist' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: process.env.BASE_PATH,
  }
};

export default nextConfig;
