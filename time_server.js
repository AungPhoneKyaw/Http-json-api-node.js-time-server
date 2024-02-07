var http = require('http')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function currenttime (time) {
  var d = new Date()
  return {
    year: d.getFullYear(),
    month: zeroFill(d.getMonth() + 1),
    date: zeroFill(d.getDate()),
    hour: zeroFill(d.getHours()),
    minute: zeroFill(d.getMinutes())
  }
}

var server = http.createServer(function (req, res) {

  var result
  
  if (/^\/api\/currenttime/.test(req.url))
    result = currenttime()

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))