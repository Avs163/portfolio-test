import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'recharts',
      'three-globe'
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle canvas dependency for PDF viewer
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Ignore canvas in client-side bundles
    config.externals = config.externals || [];
    config.externals.push('canvas');
    
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/**",
      }
    ],
    dangerouslyAllowSVG: true
  },
  async headers() {
    return [
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;