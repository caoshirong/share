var express = require('express')

var app = express()

/* app.get('/', function (req, res) {
   res.send('Hello World');
}) */
app.use(express.static(__dirname +'/'))

var server = app.listen(8093, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
