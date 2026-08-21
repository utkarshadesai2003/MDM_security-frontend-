/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/submit',
        destination: 'https://mdm-security-backend-498807929429.us-central1.run.app/organizations/submit',
      },
    ];
  },
}

module.exports = nextConfig
