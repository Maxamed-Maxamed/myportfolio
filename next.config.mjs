/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/myportfolio',
    assetPrefix: '/myportfolio/',
    trailingSlash: true,
    images: {
      unoptimized: true,
      loader: 'custom',
      loaderFile: './imageLoader.js',
    },
  };
  
  export default nextConfig;
  