const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'], // Add your supported locales
    defaultLocale: 'id', // Set the default locale
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = removeImports(nextConfig);

