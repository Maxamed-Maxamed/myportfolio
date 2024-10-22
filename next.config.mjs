/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/myportfolio',
    images: {
      unoptimized: true,
      loader: 'custom',
      loaderFile: './imageLoader.js',
    },
  };
  
  
  export default nextConfig;  