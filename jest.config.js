// You only need this file
// - if you want to customize your Jest environment
// - if you want to use Jest i. e. from a Visual Studio Code extension
const { jestConfig } = require('lwc-services/lib/config/jestConfig')

module.exports = {
  ...jestConfig,
  setupFilesAfterEnv: ['./scripts/jest/setup.ts'],
  // Add your custom Jest configuration
}
