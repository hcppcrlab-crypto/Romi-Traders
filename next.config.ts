import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost"
      }
    ],

    formats: [
      "image/avif",
      "image/webp"
    ]
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react"
    ]
  },

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },

          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },

          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },

          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          }
        ]
      }
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      }
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "/api/:path*"
      }
    ];
  }
};

export default nextConfig;
