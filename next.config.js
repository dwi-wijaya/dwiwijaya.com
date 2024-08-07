const removeImports = require('next-remove-imports')();
const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id'], // Add your supported locales
    defaultLocale: 'id', // Set the default locale
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = removeImports(nextConfig);

