
// Learn more: https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add custom configuration for Replit
config.server = {
  ...config.server,
  // Listen on all interfaces
  host: '0.0.0.0',
  // Use the port that Replit exposes
  port: 8081
};

// Make sure to resolve asset requests correctly
config.resolver.assetExts.push('db', 'db-journal');

// Ensure source maps work properly
config.transformer.minifierConfig = {
  // Required for proper source map generation
  keep_classnames: true,
  keep_fnames: true
};

module.exports = config;
