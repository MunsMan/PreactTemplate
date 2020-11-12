module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config: any) => {
      config.module.rules.push({
          test: /\.(ts|tsx)$/,
          use: [{
              loader: require.resolve('ts-loader'),
        }]   
      });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
  },
};