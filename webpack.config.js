const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
    
    return {
        mode : env.mode ?? "development",
        entry : path.resolve(__dirname, 'src/client/js', 'index.js'),
        output : {
        path : path.resolve(__dirname, 'dist'),
        filename : "[name].[contenthash].js",
        assetModuleFilename : "images/[name][ext]",
        clean : true
        },
        plugins : [
            new HtmlWebpackPlugin({ template : path.resolve(__dirname, 'src/client', 'index.html') }),
            new MiniCssExtractPlugin({ filename : "[name].[contenthash].css" }),
            new Webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})
        ],
        devServer: {
            port : 5000,
            open : true
        },
        module: {
            rules: [
                {
                    test : /\.html$/i,
                    loader : 'html-loader'
                },
                {
                  test: /\.s[ac]ss$/i,
                  use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader : "postcss-loader",
                      options : {
                        postcssOptions : {
                          plugins : [require("postcss-preset-env")]
                        }
                      }
                    },
                    "sass-loader",
                  ],
                },
                {
                    test : /\.css$/i,
                    use : ["style-loader", "css-loader"]
                },
                {
                    test : /\.(woff|woff2|eot|ttf)$/i,
                    generator : {
                        filename : 'fonts/[name].[ext]'
                    }
                },
                {
                    test : /\.(jpe?g|png|webp|gif|svg|avif)$/i,
                    type : 'asset/resource',
                    use: [
                        {
                          loader: 'image-webpack-loader',
                          options: {
                            mozjpeg: { progressive: true },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
                            webp: { quality: 75 }
                          }
                        },
                      ]
                },
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                      }
                    }
                  }
              ]
          }
    }
}