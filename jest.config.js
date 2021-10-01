const { jestConfig } = require('lwc-services/lib/config/jestConfig')

module.exports = {
  ...jestConfig,
  setupFilesAfterEnv: ['./scripts/jest/setup.ts'],
  // Add your custom Jest configuration
}
