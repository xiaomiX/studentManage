const path = require("path")
const captchapng = require('captchapng')



exports.getLoginPage = (req, res) => {
  // res.send('<p>测试文本</p>')
  res.sendFile(path.join(__dirname, "../views/login.html"))
}
exports.getResgiterPage = (req,res) => {
  res.sendFile(path.join(__dirname,'../views/register.html'))
}
exports.getImgVcode = (req, res) => {
  var code = parseInt(Math.random() * 9000 + 1000)
  var p = new captchapng(80, 30, code) // width,height,numeric captcha
  p.color(0, 0, 0, 0) // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255) // Second color: paint (red, green, blue, alpha)
  
  var img = p.getBase64()
  var imgbase64 = new Buffer(img, "base64")
  res.writeHead(200, {
    "Content-Type": "image/png"
  })
  
  res.end(imgbase64)
}

exports.Register = (req,res) => {
  // 获取传递过来的数据
  const {username} = req.body;
  // 连接数据库查询是否存在
  // MongoClient.connect(url, {useNewUrlParser:})
}
