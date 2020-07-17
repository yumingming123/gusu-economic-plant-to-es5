# 姑苏招商

### 注意路由必须为hash模式，history模式下其他页面刷新为404。
### 打包的时候需要添加publicPath: '项目名称'   才能访问的到，不然资源都访问不到。
### 因为本项目内使用iframe嵌套了其他网站，其他网站使用http协议，如本项目开启https，则会访问不到。
```
Mixed Content: The page at 'https://yu_xiao_ming.gitee.io/suzhou_investment_promotion/#/policy' was loaded over HTTPS, but requested an insecure frame 'http://qyfw.gusu.gov.cn/ZhengCe/YiLan'. This request has been blocked; the content must be served over HTTPS.
// 翻译后的
混合内容：“ https://yu_xiao_ming.gitee.io/suzhou_investment_promotion/#/policy”上的页面已通过HTTPS加载，但请求了不安全的框架“ http://qyfw.gusu.gov.cn/ZhengCe/YiLan” 。 该请求已被阻止； 内容必须通过HTTPS提供。
```