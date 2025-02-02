import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/videos/[name].[hash].[ext]', // This will store the videos in the static/videos folder
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
