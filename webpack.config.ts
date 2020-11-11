import webpack from 'webpack';
import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from "dotenv";

const context = __dirname;
dotenv.config();

interface WebpackEnvironment {
    NODE_ENV: string;
}

module.exports = (env: WebpackEnvironment, argv: { mode: string, port?: number }) => {
    const port = argv.port || parseInt(process.env.REACT_APP_PORT!) || 3000 ;
    const exclude = process.env.NODE_ENV === 'test' ? [/node_modules/] : [/node_modules/, /test/, /\.test.tsx?$/]
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
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            "alias": {
                "react": "preact/compat",
            }
        },
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader",
                        },
                        {
                            loader: "markdown-loader",
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: exclude
                },
                {
                    test: [[/\.css$/],[/\.s[ac]ss$/i]],
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        {
                            loader: 'css-loader',
                            options: {modules: true}
                        },
                        // Handling the .d.ts files
                        "@teamsupercell/typings-for-css-modules-loader",
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
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
            historyApiFallback: true,
            hot: true,
            port: port
        }
        if (process.env.docker === "true") {
            config.devServer.host = "0.0.0.0"
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