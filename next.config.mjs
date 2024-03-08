/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/docs/:path*',
                destination: '/docs/:path*/index.html',
            },
        ];
    }
};

export default nextConfig;
