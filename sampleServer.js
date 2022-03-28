var http = require('http')

http.createServer(function(req,res){
    res.write('packapeer')
    res.end()
}).listen(7000)