/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed 'output: export' to enable API routes for admin panel
    // If you need static export, deploy without admin features
    reactStrictMode: true,
    transpilePackages: ['lucide-react'], // Sometimes needed for icons
    images: {
        unoptimized: true, // For static export or if images are external without config
    },
};

export default nextConfig;
