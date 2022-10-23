module.exports = {
  images: {
    domains: [
      'localhost',
      't0toro-wordpress.tw1.ru',
      'ru.pinterest.com',
      'sun9-80.userapi.com',
      'sun9-west.userapi.com',
      'i.pinimg.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        // for webpack 5 use
        // { and: [/\.(js|ts)x?$/] }
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
