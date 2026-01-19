/**
 * TODO: Migrate RN Storybook from 6.5.x to 10 (RN 0.71 to 0.83)
 */

module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  logLevel: 'debug',
  env: () => ({}),
  addons: ['@storybook/addon-essentials']
}
