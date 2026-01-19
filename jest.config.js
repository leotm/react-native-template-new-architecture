module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/setup.ts'],
  transformIgnorePatterns: [
    // Transform these from ES6+ to CommonJS for Node.js
    'node_modules/(?!(react-native|@react-native|react-native-safe-area-context)/)'
  ]
}
