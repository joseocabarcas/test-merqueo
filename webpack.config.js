const common = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');

const envs = {
  development: 'dev',
  production: 'prod',
};

console.log(process.env.NODE_ENV)
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack.config.${env}.js`);
module.exports = webpackMerge(common, envConfig);