/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"

        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4|jpg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  publicPath: '/_next',
                  name: 'static/media/[name].[hash].[ext]',
                },
              },
            ],
          });
        }

        config.resolve={
          ...config.resolve,
          fallback:{
            "child_process": false, 
            "process":  false, 
            "fs": false, 
            "util": false, 
            "tls":false,
            "http": false,
            "https": false,
            "net": false,
            "crypto": false, 
            "path": false,
            "os": false, 
            "stream": false,
            "zlib": false,
            "dns":false
                    }
        }
        return config;
    }
}

module.exports = nextConfig
