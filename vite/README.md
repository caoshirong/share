# vite

Vite，新型前端构建工具。基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。主要由两部分组成：

- 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

- 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。

#### 传统打包和 Vite 构建模式的直观区别

![blockchain](./images/bundler.png 'bundle based dev serve')
![blockchain](./images/esm.png 'native esm based dev server')

首先，你需要把 type="module" 来声明这个脚本是一个模块:
`<script type="module" src="/src/main.js"></script>`

当 script.type 为 module 时，通过 src 及 import 导入的文件会发送 http 请求。

#### 特点

- 快速的冷启动
- 及时热模块更新
- 真正按需编译（可以充分的使用 treeshaking）
- 对 ts、jsx、css 等开箱即用，无需配置。
- 对于库开发者也是可以通过简单的配置即可打包输出多种格式的包
- 开发和生产共享了 rollup 的插件接口，大部门的 rollup 插件可以在 vite 上使用
- 类型化配置，配置文件可以使用 ts，具有配置类型提示

#### 功能

- NPM 依赖解析和预构建（esbuild）
  - 自动依赖搜寻
  - Monorepo 和链接依赖
  - 自定义行为
  - 缓存(文件系统缓存、浏览器缓存)
- 模块热重载
- TypeScript
- Vue
- JSX
- CSS
- PostCSS
- CSS Modules
- CSS 预处理器
- 静态资源处理
- URL 导入
- JSON
- Glob 导入
- Web Assembly
- Web Worker
- 构建优化

  - 动态导入 Polyfill
  - CSS 代码分割
  - 预加载指令生成
  - 异步 Chunk 加载优化
    ![blockchain](./images/graph.png)
    在这种无优化的模式中会额外增加网络往返
      <div style="padding: 20px; background: #fff;border-radius: 15px;margin: 10px 0;color:#000">`Entry ---> A ---> C`</div>
      Vite 将使用一个预加载步骤自动重写代码，来分割动态导入调用
      <div style="padding: 20px; background: #fff;border-radius: 15px;margin: 10px 0;color:#000">`Entry ---> (A + C)`</div>
      Vite 的优化将跟踪所有的直接导入，无论导入深度如何，都完全消除不必要的往返。

#### Vite 和 VueCli 的区别

<div style="padding: 20px; background: #000;border-radius: 15px;margin: 10px 0">
Vite在开发模式下不需要打包可以直接运行，使用的是ES6的模块化加载规则；
VueCLI开发模式下必须对项目打包才可以运行；
Vite基于缓存的热更新；
VueCLI基于webpack的热更新；
</div>

#### Web packaging: 浏览器原生打包

主要特点如下：

- Signed HTTP Exchanges：可以让浏览器信任某个 HTTP 请求对（request/response）确实是来自于所声明的源服务器。
- Bundled HTTP Exchanges：是多个请求对的集合，不要求当中的每个请求都进行签名（signed），只要携带某些元数据（metadata）用于描述如何将请求束作为一个整体来解析。

你可以把一个 HTTP 请求对包（Bundled HTTP Exchange）理解为一个资源文件包，它可以通过目录表（manifest）随意访问，并且里面的资源能够被高效地缓存以及根据相对优先级的高低来标记。有了这个机制，原生模块能够提升开发调试的体验。当你在 Chrome 开发者工具查看资源时，浏览器会精准定位到原生的模块代码中，而不需要复杂的 source-map。
