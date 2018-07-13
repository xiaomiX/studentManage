// 导入express
const express = require('express');
const path = require('path');
// 创建路由对象
const accountRouter = express.Router();
// 导入自定义控制器模块
const accountCtrl = require(path.join(__dirname,'../controllers/accountController.js'))
// 路由对象的get方法，浏览器发送127.0.0.1:3000/account/login时，交给accountCtrl控制器的getLoginPage方法去处理
accountRouter.get('/login',accountCtrl.getLoginPage)
accountRouter.get('/Vcode',accountCtrl.getImgVcode)
accountRouter.get('/register',accountCtrl.getResgiterPage)
accountRouter.post('/register',accountCtrl.Register)
// 导出路由模块
module.exports = accountRouter