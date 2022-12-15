/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kylejorve.com',
            },
            {
                protocol: 'https',
                hostname: 'clinquant-starburst-76ea0e.netlify.app',
            }
        ]
    },
};

module.exports = nextConfig;
