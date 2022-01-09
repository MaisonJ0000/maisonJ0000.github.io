module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    formats: ['image/avif', 'image/webp'],
    path: 'https://maisonj0000.imgix.net/',
  },
};
