// @ts-ignore
process.traceDeprecation = true;

import webpack from 'webpack';
import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const context = __dirname;

interface WebpackEnvironment {
    NODE_ENV: string;
}

module.exports = (env: WebpackEnvironment, argv: { mode: string, port?: number }) => {
    const port = argv.port || 3000;
    const config: webpack.Configuration = {
        name: 'client',
        target: 'web',
        context,
        entry:
            './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'build')
        },
        devtool: argv.mode === 'production' ? false : 'eval-source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                hash: true,
                filename: 'index.html',
                inject: 'body'
            }),
        ]
    }

    if (argv.mode === 'development') {
        config.devServer = {
            contentBase: join(__dirname, 'dist'),
            compress: true,
            port: port
        }
        const { HotModuleReplacementPlugin } = webpack;
        config.plugins?.push(new HotModuleReplacementPlugin)
    }

    if (argv.mode === 'production') {
        config.plugins?.push(new webpack.optimize.ModuleConcatenationPlugin);
        
    }

    if (process.env.NODE_ENV === 'analyse') {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        config.plugins?.push(new BundleAnalyzerPlugin)
    }

    return config;
}