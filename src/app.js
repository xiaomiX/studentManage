// 导入模块
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
// 创建app
const app = express();
// 启用静态资源中间件(express唯一内置地中间件)
const static = express.static(path.join(__dirname,'static'));
app.use(static);
// 启用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// 定义路由中间件（自己集成的中间件，需要path）
const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
// 启用路由中间件（这个一定要放在最后启用）
app.use('/account',accountRouter) //浏览器发送127.0.0.1:3000/account时，去往响应的路由中间件
// 定义session中间件
// const session = require('express-session');
// app.use(session({
//     secret: '123'
// }))
// 开启监听
app.listen(3000,'127.0.0.1',2,err=>{
    if(err){
        console.log(err);
    }
    console.log('127.0.0.1:3000 start OK');
})

