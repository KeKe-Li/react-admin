## React项目一健构建

 [![npm version](https://badge.fury.io/js/jest.svg)](http://badge.fury.io/js/jest)


####安装最新的node.js 

```
npm install -g n  //首先安装n模块
n stable  //升级Node.js到最新稳定版
n 5.0.0  //或者指定版本升级
node -v  //检查更新是否成功

```

#### 修改npm源为淘宝源

```
npm config set registry “https://registry.npm.taobao.org”

```

#### 安装脚手架

```
首先确保自己安装了nodejs，然后全局安装yeoman
npm install -g yo

然后直接安装脚手架
npm install -g generator-reactpackage

```

#### 创建React项目

```
 mkdir admins 创建一个 admins 文件
 
 cd admins 进入 admins
 
 yo reactpackage 生成文件
 
 然后就会在此目录下生成以下目录结构：
 
 ├── data
 │ └── test.json
 ├── src
 │ ├── components
 │ │ └── App.js
 │ ├── images
 │ │ └── yeoman.png
 │ ├── styles
 │ │ └── app.scss
 │ ├── vendor
 │ │ └── jquery.js
 │ ├── views
 │ │ └── home.html
 ├── node_modules
 ├── index.html
 ├── package.json
 └── webpack.config.js
```

#### 调试打包React项目

```
然后使用以下命令：
npm start 
npm run build

```


```
npm本地安装依赖 npm install || yarn本地安装依赖 yarn install

npm本地运行 npm run start  || yarn start
```

### 技术栈
* Webpack + Bable + React + ReactDom + Antd + ReactRouter + less + Redux + Fetch



### 模块
* 富文本编辑：react-draft-wysiwyg
* 全屏插件：screenfull


### Project Structure
* 目录树可以直接用tree系统命令 windows,linux都支持，mac下需要手动安装


```
├── build.js                   项目打包后的文件
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.config.dev.js   开发环境配置
│   ├──webpack.config.prod.js  生产环境配置
├── node_modules               node模块目录
├── public
│   └──index.html
├── scripts
│   ├── build.js               打包项目文件
│   ├── start.js               启动项目文件
│   └── test.js                测试项目文件
├── src
│   |   |
│   |   |
│   │   ├── actions            redux中的action
│   │   ├── components         通用功能组件
│   │   ├── container          通用样式组件
│   │   ├── api
│   │   ├── pages              页面模块
│   │   ├── reducers           redux中的reducer
│   │   ├── utils              工具类
│   │   │   ├── config.js      通用配置
│   │   │   ├── menu.js        菜单配置
│   │   │   └── fetch.js        ajax模块
│   │   └── routes.js          前端路由
│   └── server                 服务端目录
│       └── controller
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

#### Articles
* [React 的ES5、ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
* [React 组件之间如何交流](http://www.tuicool.com/articles/AzQzEbq)
* [react-router 中的history](https://zhuanlan.zhihu.com/p/20799258?refer=jscss)
* [react-router 按需加载](https://segmentfault.com/a/1190000007141049)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 实例和文章](https://github.com/JasonBai007/webpack-starter-kit)
* [React](https://segmentfault.com/a/1190000002793786)
* [Fetch](http://www.jianshu.com/p/THLARe#)
* [Fetch API](https://github.github.io/fetch/)
* [使用Mock.js进行独立于后端的前端开发](https://segmentfault.com/a/1190000003087224)

#### React 组件生命周期
```
    * Mounting：已插入真实 DOM
    * Updating：正在被重新渲染
    * Unmounting：已移出真实 DOM
    
   React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
    * componentWillMount :会在组件render之前执行，并且永远都只执行一次。 
    * componentDidMount：组件加载完毕之后立即执行
    * componentWillReceiveProps： 组件接收到一个新的prop时被执行。这个方法在初始化render时不会被调用
    * componentWillUpdate：组件接收到新的props或者state但还没有render时被执行
    * componentDidUpdate :在组件完成更新后立即执行
   
```
   ![](https://github.com/KeKe-Li/react/blob/master/src/assets/images/prop.png)


#### export 和 export default的
  
  * export与export default均可用于导出常量、函数、文件、模块等
  * 你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
  * 在一个文件或模块中，export、import可以有多个，export default仅有一个
  * 通过export方式导出，在导入时要加{ }，export default则不需要
  
```
   1 export
   //demo1.js
   export const str = 'hello'
   export function f(a){return a +1}
   
   对应的导入方式：
   //demo2.js
   import { str, f } from 'demo1' //也可以分开写两次，导入的时候带花括号

  2 export default
  
  //demo1.js
  export default const str = 'hello world'
  对应的导入方式：
  
  //demo2.js
  import str from 'demo1' //导入的时候没有花括号
     
  使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
 
  let BaseUrl = "www.baidu.com";
  export default BaseUrl
  //一个文件内不能有多个export default
   

```

### 组件通讯

* 类似：父子：Parent 与 Child_1、Child_2、Child_1_1、Child_1_2、Child_2_1

* 兄弟：Child_1 与 Child_2、Child_1_1 与 Child_2

* 在 React 中，React 组件之间的关系为从属关系，与 DOM 元素之间的父子关系有所不同


```
 * 通讯是单向的，数据必须是由一方传到另一方。在 React 中，父组件可以向子组件通过传 props 的方式，向子组件进行通讯
 
    class Parent extends Component{
      state = {
        msg: 'start'
      };
    
      //组件加载完毕之后立即执行     
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            msg: 'end'
          });
        }, 1000);
      }
    
    
      render() {
        return <Child_1 msg={this.state.msg} />;
      }
    }

    class Child_1 extends Component{
      render() {
        return <p>{this.props.msg}</p>
      }
    } 
    
```

* 父组件与子组件多个层级传递参数可以用...运算符（Object 剩余和展开属性），将父组件的信息，以更简洁的方式传递给更深层级的子组件。

```
// 通过 ... 运算符 向 Child_1_1 传递 Parent 组件的信息
    class Child_1 extends Component{
      render() {
        return <div>
          <p>{this.props.msg}</p>
          <Child_1_1 {...this.props}/>
        </div>
      }
    }

     class Child_1_1 extends Component{
       render() {
            return <p>{this.props.msg}</p>
       }
     }
       
```

* 子组件向父组件通讯

```
    class Parent extends Component{
      state = {
        msg: 'start'
      };
      
      transferMsg(msg) {
        this.setState({
          msg
        });
      }
    
      render() {
        return <div>
            <p>child msg: {this.state.msg}</p>
            <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
          </div>;
      }
    }

    class Child_1 extends Component{
      componentDidMount() {
        setTimeout(() => {
          this.props.transferMsg('end')
        }, 1000);
      }
    
      render() {
        return <div>
          <p>child_1 component</p>
        </div>
      }
    }
    
    //使用了 箭头函数，将父组件的 transferMsg 函数通过 props 传递给子组件，得益于箭头函数，保证子组件在调用 transferMsg 函数时，其内部 this 仍指向父组件。
    //对于层级比较深的子组件与父组件之间的通讯，仍可使用 ... 运算符，将父组件的调用函数传递给子组件，具体方法和上面的例子类似。
        
```

* 兄弟组件间通讯
* 可以使用Redux来进行同级之间的通讯.


#### webpack在react项目中的配置

<a href="https://doc.webpack-china.org/configuration/resolve/">webpack3.0</a>
* 在项目的config目录下有四个文件：
* dev-server.js（开发环境的node文件，为了webpack的热替换）
* webpack.base.js（提取的webpack通用配置，开发环境和生产环境都引入其配置项）
* webpack.dev.js（开发环境使用的webpack，其中包含了热替换）
* webpack.pro.js（生产环境使用的webpack，把公共js、css提取出来并且压缩源代码）
* 文件之间的引用步骤 ：开发环境：dev-server.js → webpack.dev.js → webpack.base.js
* 文件之间的引用步骤 : 生产环境：webpack.pro.js → webpack.base.js

```
package.json结构：

如果想运行起来项目就需要在此文件的scripts中配置一些配置项:
    "scripts": {
      "init": "webpack --config build/webpack.dev.js",
      "dev" : "node build/dev-server.js",
      "pro" : "webpack --config build/webpack.pro.js"
    }

 注：

 1. 如果是要在开发环境下，首次运行应该先npm run init，再npm run dev

  （原因：npm run dev只是起热加载服务，真正访问需要dist目录中有index.html文件，所以需要先npm run init把init.html文件生成一次。）

 2. 如果在生产环境下，直接执行npm run pro

```


* dev-server.js
```
    * 可以看到第三行会引用当前目录下的webpack.dev.js文件
    * 这里没有.js后缀是因为在webpack.base.js中有个配置可以省略写后缀名

    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.dev');

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        contentBase: __dirname,
        hot: true,
        quiet: false,
        noInfo: false,
        stats: { colors: true }
    }).listen(3001, '127.0.0.1', function (err, result) {
        if (err) console.log(err);
        console.log('正在监听host.com:3001');
    });

```


* webpack.dev.js

```
var path = require('path');
var webpack = require('webpack');
var webpackBase = require('./webpack.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 基本配置
var devConfig = Object.assign(webpackBase, {
    devtool: 'cheap-module-eval-source-map',
    devServer: true,
    hotComponents: true,
    entry: {
        index: [
            'webpack-dev-server/client?http://127.0.0.1:3001',//入口路径
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'http://127.0.0.1:3001/dist/',//热加载地址
        hash: true,
        filename: 'index.js'
    }
});

// 插件配置
devConfig.plugins = (webpackBase.plugins || []).concat(
    // 热替换
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
        favicon: path.resolve(__dirname, '../src/i/favicon.ico'), //favicon路径
        filename: './index.html',    //生成的html存放路径，相对于 path
        template: path.resolve(__dirname, '../src/template/dev_index.html'),    //html模板路径
        inject: 'body',    //允许插件修改哪些内容，包括head与body
        hash: true, //为静态资源生成hash值
    }),
    // 配置全局变量（不同环境加载不同配置文件）
    new webpack.ProvidePlugin({
        ENV: path.resolve(__dirname, "../config/dev")
    })
);

module.exports = devConfig;

注：在webpack配置路径时，最好要这样写，可确保路径正确path.resolve(__dirname, "../config/dev")


```

* webpack.base.js

```
    var webpack = require('webpack');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');

    module.exports = {
        // 语言规范解释器，babel6开始插件化了
        babel: {
            presets: ['es2015', 'stage-0', 'react']
        },
        resolve: {
            // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot','jsx?harmony','babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                    exclude: /node_modules/
                },{
                    test: /\.js$/,
                    loaders: ['react-hot','babel-loader'],
                    //exclude: [nodeModulesPath, ueditorPath]
                    exclude: /node_modules/,
                    //,query: {presets: ['es2015','react']}
                },{
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                },{
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                },{
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    // 超过limit的图片会让 url-loader处理
                    loader: 'url-loader?limit=1&name=i/[name].[ext]'
                }
            ]
        },
        plugins: [
            // 整合css文件
            new ExtractTextPlugin("css/[name].css", {allChunks: true}),
            // 使用压缩的react包
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            })
        ]
    };

```

* webpack.prod.js

```

    var path = require('path');
    var webpack = require('webpack');
    var webpackBase = require('./webpack.base');
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');

    // 基本配置
    var proConfig = Object.assign(webpackBase, {
        devtool: 'cheap-module-source-map',
        entry: {
            main: path.resolve(__dirname, '../src/index.jsx'),  // 逻辑代码
            common: ['react','antd','jquery']  // 公用类代码
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: "",
            hash: true,
            filename: 'js/[name].entry.js'
        }
    });

    // 插件配置
    proConfig.plugins = (webpackBase.plugins || []).concat(
        // html模板
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, '../src/i/favicon.ico'), //favicon路径
            filename: './index.html',    //生成的html存放路径，相对于 path
            template: path.resolve(__dirname, '../src/template/dev_index.html'),    //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: ['main', 'common'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        // 压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 把入口文件里面的数组common打包成common.entry.js
        new webpack.optimize.CommonsChunkPlugin('common',  'js/common.entry.js'),
        // 配置全局变量（不同环境加载不同配置文件）
        new webpack.ProvidePlugin({
            ENV: path.resolve(__dirname, "../config/pro")
        })
    );

    module.exports = proConfig;

```

* 可以看到webpack.dev.js和webpack.pro.js都有这么一个配置项（dev加载config/dev.jsx；pro加载config/pro.jsx）

```
   // 配置全局变量（不同环境加载不同配置文件）
   new webpack.ProvidePlugin({
       ENV: path.resolve(__dirname, "../config/pro")
   })

  这个配置项为了使整个项目都可以使用ENV的全局变量

```

#### react-router的实现原理

* react-router的依赖基础 - history

* history是一个独立的第三方js库，可以用来兼容在不同浏览器、不同环境下对历史记录的管理，拥有统一的API。具体来说里面的history分为三类:

* 旧版浏览器: 用于旧版浏览器，主要通过hash来实现，对应createHashHistory

* 高版本浏览器: 用于支持 HTML5 history API 的浏览器，对应createBrowserHistory

* node环境下: 主要存储在memeory里面，对应createMemoryHistory

```
上面针对不同的环境提供了三个API，但是三个API有一些共性的操作，将其抽象了一个公共的文件createHistory:

    // 内部的抽象实现
    function createHistory(options={}) {
      ...
      return {
        listenBefore, // 内部的hook机制，可以在location发生变化前执行某些行为，AOP的实现
        listen, // location发生改变时触发回调
        transitionTo, // 执行location的改变
        push, // 改变location
        replace,
        go,
        goBack,
        goForward,
        createKey, // 创建location的key，用于唯一标示该location，是随机生成的
        createPath,
        createHref,
        createLocation, // 创建location
      }
    }

上述这些方式是history内部最基础的方法，createHashHistory、createBrowserHistory、createMemoryHistory只是覆盖其中的某些方法而已。其中需要注意的是，此时的location跟浏览器原生的location是不相同的，最大的区别就在于里面多了key字段，history内部通过key来进行location的操作。


    function createLocation() {
      return {
        pathname, // url的基本路径
        search, // 查询字段
        hash, // url中的hash值
        state, // url对应的state字段
        action, // 分为 push、replace、pop三种
        key // 生成方法为: Math.random().toString(36).substr(2, length)
      }
    }



```

* Router 与 Route 一样都是 react 组件，它的 history 对象是整个路由系统的核心，它暴漏了很多属性和方法在路由系统中使用

* Route 的 path 属性表示路由组件所对应的路径，可以是绝对或相对路径，相对路径可继承；

* Redirect 是一个重定向组件，有 from 和 to 两个属性；

* Route 的 onEnter 钩子将用于在渲染对象的组件前做拦截操作，比如验证权限；

```
     <Route onEnter={requireAuth} path="archives" component={Archives}>

```

* 在 Route 中，可以使用 component 指定单个组件，或者通过 components 指定多个组件集合；

```
    const routes = (
      <HashRouter history={customHistory} >
        <div>
          <Route path="/" component={Container} />
          <Route path="/login" component={Login} />
          <Redirect from='*' to='/login' />
        </div>
      </HashRouter>
    );

```

* param 通过 /:param 的方式传递；

#### React的 Diff算法
react的diff算法用在什么地方呢？当组件更新的时候，react会创建一个新的虚拟dom树并且会和之前储存的dom树进行比较，这个比较多过程就用到了diff算法，所以组件初始化的时候是用不到的。react提出了一种假设，相同的节点具有类似的结构，而不同的节点具有不同的结构。在这种假设之上进行逐层的比较，如果发现对应的节点是不同的，那就直接删除旧的节点以及它所包含的所有子节点然后替换成新的节点。如果是相同的节点，则只进行属性的更改。

对于列表的diff算法稍有不同，因为列表通常具有相同的结构，在对列表节点进行删除，插入，排序的时候，单个节点的整体操作远比一个个对比一个个替换要好得多，所以在创建列表的时候需要设置key值，这样react才能分清谁是谁。当然不写key值也可以，但这样通常会报出警告，通知我们加上key值以提高react的性能。

 ![](https://github.com/KeKe-Li/react/blob/master/src/assets/images/diff.png)


### License
This is free software distributed under the terms of the MIT license
