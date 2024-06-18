/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uhnqmaryguzfbhrvbkpa.supabase.co',
            },
        ],
    },
};

module.exports = nextConfig;
