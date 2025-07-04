import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orient.tm',
      },
      {
        protocol: 'https',
        hostname: 'cdn.orient.tm',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin('./src/shared/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
