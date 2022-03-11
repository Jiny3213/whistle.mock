# whistle.mock
whistle 的 mock 插件，方便管理mock数据，可以使用mockjs能力

## 开始使用

0. 安装并启动whistle
1. `git clone`
2. `npm install`
3. 首次使用，则需要`npm link`，在whistle中加载本插件
4. `npm run watch` 开启监听

## 配置mock文件

1. npm run new 使用模板创建mock文件
2. 在whistle中写代理规则，代理指定接口到插件，如`https://baidu.com/test mock://`

## 例子
参考/mock/example

## 路由模式 router
常规的mock方式，可以使用mockjs的能力

### 代理模式 proxy
可以代理线上接口返回的数据，在此基础上增加或删除字段

### 处理 JSON RPC 风格的接口
参考/mock/example/jsonRpc.js，需要结合使用以上两种模式

## 为什么用这个插件
1. 对于whistle用户，你可以使用你喜欢的代码编辑器，使用js语法而不只是json
2. 把mock数据和前端项目解耦，在一个地方编写所有项目的mock数据，方便复用公共接口

> 参考
> whistle 插件开发 http://wproxy.org/whistle/plugins.html
> express 文档
> whistle 插件开发工具 https://github.com/avwo/lack
> mockjs