# normal

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 小问题
routerlink不能跳转外部链接  只允许本项目的路由地址  所以做了更改  可以使用函数式的跳转方式   也可以使用a标签
项目中有用到a标签跳转本项目的路由的写法    当然也可以跳转到外部链接

## 部署到iis服务器时  发生的问题
1. iis服务器内   路由模式mode使用history的话   其他页面点击就找不到，刷新了也不存在
nginx服务器的解决方案是在根目录下 =》 conf文件夹 =》 nginx.conf文件   内添加一行    ``` try_files $uri $uri/ /index.html; ```
```
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       4200;      #端口号
        server_name  localhost;     #网站名
        location / {
            root   dist;     #打包后资源
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;      #其他没找到的定位到index.html页面    主要针对vue打包后的单页面应用
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

2. 使用swiper插件会在ie11内直接报错，然后阻止了页面显示    
原因在于vue内使用的swiper版本过高的原因   
解决方法：1）手写一份swiper。 2）把版本降至3.1.3。  3）babel只是把vue内的代码从es6转化为es5，但是模块内的语法并没有转化

## 本案例是   使用正常4.1.1的vue-awesome-swiper     
在 vue.config.js添加把模块内的依赖使用到的高级语法（es6）转化为es5语法
``` 
module.exports = {
    transpileDependencies: [
        'vue-awesome-swiper', 'swiper', 'dom7', 
        // 'ssr-window'
    ]
}
```
1. 因为vue-awesome-swiper内部使用了swiper和dom7，所以也需要加上    这个swiper的作者也不备注一下（坑啊...）
备注：使用cnpm安装的话  会显示安装两个依赖；但使用yarn会全部显示安装的内容    所以这里给yarn点个赞

2. 还有一个坑：（无力吐槽ie）轮播能正常显示了  但是按钮内的箭头没了...    （按钮结构上的slot不能去掉）
这里想自己更改箭头样式，看了百度的方法：要么把按钮移出swiper-contain，这里使用的直接添加背景图，背景图会覆盖之前的箭头从而解决问题