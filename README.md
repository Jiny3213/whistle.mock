# whistle.mock
whistle mock 插件，可以利用js来改变mock的数据。
1. 常规的 mock 方式直接把返回数据写死，本插件可以用 js 批量修改数据字段，也可以读取请求体和入参，调用不同的数据修改逻辑
2. 代理模式可以代理线上的接口，修改其中的字段再返回

## 拉取代码
- `git clone`
- `npm install`

## 首次使用，安装插件
- 如果正在运行 whistle，先`w2 stop`停止其运行
- 在插件目录下运行 `w2 run` 加载本插件到 whistle 的插件列表

## 常规使用
- whistle 有两种打开方式
  1. `w2 start` 正常开启 whistle
  2. 在插件目录下运行`w2 run`开启 whistle 的同时可以查看插件输出（如console.log）
- `npm run watch` 开启热更新，监听插件修改的变化，否则不会更新你修改的内容
- 创建mock模版，/mock/api 中的js文件会被自动引入
  1. `npm run new` 根据指引创建模版文件(推荐)
  2. 参考/mock/example/template模版，在/mock/api中新建js文件
- 配置匹配规则，如`https://mapi.vip.com/vips-mobile/dgmaxx/shop/wx/product/detail/v2 mock://`

## example
参考/mock/example

## 插件提供两种mock方式，路由模式和代理模式

### 路由模式
常规的mock方式，可以使用js的能力来批量修改接口数据，比如统一修改接口返回的时间戳
在某些有实时时间限制的需求中尤为重要（如未来预告，mock的时间戳会过期，又要重新改写）

### 代理模式
使用express-http-proxy中间件处理代理请求，可以在线上接口的基础上增加或删除字段，也可以做透明代理

### 路由-代理模式
适用于：所有数据都请求同一个接口，根据请求体方法名来调用不同的服务器方法

例如xup，所有接口都请求vposRoutePostSUP方法，请求体中有serviceName字段区分调用方法；而且除了业务请求外，拉取基础数据也使用到这个接口；甚至还需要处理options请求；不能简单mock

解决方法：
通过路由模式，获取请求体中都方法名，判断是否需要mock
- 若不需要mock，是基础数据请求，则传递到代理中间件处理，做透明代理
- 若需要mock，则返回mock数据

> 参考链接
> whistle 插件开发 http://wproxy.org/whistle/plugins.html
> express 文档
