/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['lucide-react'], // Sometimes needed for icons
    images: {
        unoptimized: true, // For static export or if images are external without config
    },
};

export default nextConfig;
