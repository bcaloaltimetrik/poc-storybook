
const LWCWebpackPlugin = require("lwc-webpack-plugin");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async (config) => {
    config.plugins.push(
      new LWCWebpackPlugin({
        stylesheetConfig: { customProperties: { allowDefinition: true } }
      })
    );

    return config;
  }
}