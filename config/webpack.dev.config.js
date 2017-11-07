//开发环境使用的webpack，其中包含了热替换
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
//自动生成一个html文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//强制所有必需模块的整个路径与实际路径相匹配
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
//允许我们将自定义变量插入
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');


const publicPath = '/';

const publicUrl = '';

const env = getClientEnvironment(publicUrl);


module.exports = {

    devtool: 'cheap-module-source-map',

    //文件入口
    entry: [

        require.resolve('react-dev-utils/webpackHotDevClient'),

        require.resolve('./polyfills'),

        require.resolve('react-error-overlay'),

        paths.appIndexJs,

    ],

    // 输出目录的绝对路径
    output: {
        // Next line is not used in dev but WebpackDevServer crashes without it:
        //所有输出文件的目标路径
        path: paths.appBuild,
        // Add /* filename */ comments to generated require()s in the output.
        //告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释
        pathinfo: true,
        // This does not produce a real file. It's just the virtual path that is
        // served by WebpackDevServer in development. This is the JS bundle
        // containing code from all our entry points, and the Webpack runtime.
        // 输出的每个包的相对路径
        filename: 'static/styles/bundle.js',
        // There are also additional JS chunk files if you use code splitting.
        //按需加载
        chunkFilename: 'static/styles/[name].chunk.js',
        // This is the URL that app is served from. We use "/" in development.
        // 输出解析文件的目录，url 相对于 HTML 页面
        publicPath: publicPath,
        // Point sourcemap entries to original disk location
        //此选项仅在 「devtool 使用了需要模块名称的选项」时使用
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath),//绝对路径文件名
    },
    //resolve 指定可以被导入的文件后缀
    resolve: {
        // This allows you to set a fallback for where Webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        //关于模块配置
        modules: ['node_modules', paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.styles`
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        // These are the reasonable defaults supported by the Node ecosystem.
        // We also include JSX as a common component filename extension to support
        // some tools, although we do not recommend using it, see:
        // https://github.com/facebookincubator/create-react-app/issues/290
        // 开启后缀名的自动补全
        extensions: ['.js', '.json', '.jsx'],
        //模块别名列表
        alias: {
            // Support React Native Web
            'react-native': 'react-native-web',
            components: path.resolve(__dirname, '..') + '/src/components',
            container: path.resolve(__dirname, '..') + '/src/container',
            images: path.resolve(__dirname, '..') + '/src/assets/images',
            pages: path.resolve(__dirname, '..') + '/src/pages',
            utils: path.resolve(__dirname, '..') + '/src/utils',
            data: path.resolve(__dirname, '..') + '/src/server/data',
            actions: path.resolve(__dirname, '..') + '/src/redux/actions',
            reducers: path.resolve(__dirname, '..') + '/src/redux/reducers',
        },
        plugins: [
            // Prevents users from importing files from outside of src/ (or node_modules/).
            // This often causes confusion because we only process files within src/ with babel.
            // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
            // please link the files into your node_modules/ and let module-resolution kick in.
            // Make sure your source files are compiled, as they will not be processed in any way.
            new ModuleScopePlugin(paths.appSrc),
        ],
    },

    module: {
        strictExportPresence: true,
        rules: [

            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            // ** ADDING/UPDATING LOADERS **
            // The "file" loader handles all assets unless explicitly excluded.
            // The `exclude` list *must* be updated with every change to loader extensions.
            // When adding a new loader, you must add its `test`
            // as a new entry in the `exclude` list for "file" loader.

            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.less$/, /\.json$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/,],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            // A missing `test` is equivalent to a match.
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: require.resolve('babel-loader'),
                options: {

                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    plugins: [
                        "transform-decorators-legacy",
                        ['import', [{libraryName: 'antd', style: true}]],  // import less
                    ],
                    cacheDirectory: true,
                },
            },
            // "postcss" loader applies autoprefixer to our CSS.
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // "style" loader turns CSS into JS modules that inject <style> tags.
            // In production, we use a plugin to extract that CSS to a file, but
            // in development "style" loader enables hot editing of CSS.
            {
                test: /\.(css)$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: ['>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            // Parse less files and modify variables
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: ['>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    {
                        loader: require.resolve('less-loader'),
                        options: {
                            modifyVars: {"@primary-color": "#1DA57A"},
                        },
                    },
                ],
            },
            // ** STOP ** Are you adding a new loader?
            // Remember to add the new extension(s) to the "file" loader exclusion list.
        ],
    },

    plugins: [
        // Makes some environment variables available in index.html.
        // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
        // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        // In development, this will be an empty string.
        //允许我们将自定义变量插入
        new InterpolateHtmlPlugin(env.raw),
        // Generates an `index.html` file with the <script> injected.
        //自动生成一个html文件插件
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'development') { ... }. See `./env.styles`.
        // 编译时(compile time)插件
        new webpack.DefinePlugin(env.stringified),
        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),
        // Watcher doesn't work well if you mistype casing in a path so we use
        // a plugin that prints an error when you attempt to do this.
        // See https://github.com/facebookincubator/create-react-app/issues/240
        new CaseSensitivePathsPlugin(),
        // If you require a missing module and then `npm install` it, you still have
        // to restart the development server for Webpack to discover it. This plugin
        // makes the discovery automatic so you don't have to restart.
        // See https://github.com/facebookincubator/create-react-app/issues/186
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        // Moment.styles is an extremely popular library that bundles large locale files
        // by default due to how Webpack interprets its code. This is a practical
        // solution that requires the user to opt into importing specific locales.
        // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
        // You can remove this if you don't use Moment.styles:
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    //性能
    //给定一个创建后超过 250kb 的资源，不展示警告或错误提示
    performance: {
        hints: false,
    },
};