<img src="assets/icon.png" alt="logo" height="120" align="right" />

# Electronic WeChat

[![Build Status](https://travis-ci.org/palytoxin/electronic-wechat.svg?branch=master)](https://travis-ci.org/palytoxin/electronic-wechat)

**Linux 下的微信客户端. 使用[Electron](https://github.com/atom/electron)构建.**

# Electron 更新到了v7.1.5，以及部分依赖

# 感谢

感谢 [kooritea](https://github.com/kooritea/electronic-wechat) 和 [geeeeeeeeek](https://github.com/geeeeeeeeek/electronic-wechat)

另外可以尝试使用 [winetricks-zh](https://github.com/hillwoodroc/winetricks-zh) 的wine-wechat


## 更新记录

--- 2019-12-17 ---

> Electron 更新到了v7.1.5

### 部分更新记录
请查看[kooritea](https://github.com/kooritea/electronic-wechat)维护的版本

#### [下载构建好的应用](https://github.com/kooritea/electronic-wechat/releases)

## 如何使用

在下载和运行这个项目之前，你需要在电脑上安装 [Git](https://git-scm.com) 和 [Node.js](https://nodejs.org/en/download/) (来自 [npm](https://www.npmjs.com/))。在命令行中输入:

``` bash
# 下载仓库
git clone https://github.com/palytoxin/electronic-wechat.git
# 进入仓库
cd electronic-wechat
# 安装依赖, 运行应用
npm install && npm start
```

**提示:** 如果 `npm install` 下载缓慢，你可以使用自定义环境变量。

`ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/" npm install`

根据你的平台打包应用:

``` shell
npm run build:osx
npm run build:linux
npm run build:win
```

#### 项目使用 [MIT](LICENSE.md) 许可

*Electronic WeChat* 是这个开源项目发布的产品。网页版微信是其中重要的一部分，但请注意这是一个社区发布的产品，而 *不是* 官方微信团队发布的产品。
