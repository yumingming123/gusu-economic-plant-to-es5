module.exports = {
    transpileDependencies: [
        'vue-awesome-swiper', 'swiper', 'dom7', 
        // 'ssr-window'
    ],
    // 上传到码云上了  可以在码云上访问本项目
    // 注意是  publicPath    不是baseURL    
    // 因为码云不是你自己的服务器   开启的网站并不在根节点下   虽然服务器是你的昵称 
    // 但还是按照项目名称进行分类了  所以需要添加  路径  
    // 码云不支持history模式路由，必须改为hash 
    // 详情见  http://www.manongjc.com/detail/14-nefjefunpcopxkm.html
    publicPath: process.env.NODE_ENV === 'production' ? '/suzhou_investment_promotion' : '/',
}