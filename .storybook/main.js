const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config) => {
    // Excludes src/modules from postcss-loader
    config.module.rules.forEach((rule) => {
      if (rule.test.toString() === /\.css$/.toString()) {
        rule.exclude = /src\/modules/
      }
    })

    config.plugins.push(
      new LWCWebpackPlugin({
        stylesheetConfig: { customProperties: { allowDefinition: true } },
      })
    )

    return config
  },
}
