var http = require('http');
var https = require('https');
var url = 'https://www.psiglonuevo.com/feed/';

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'application/rss+xml; charset=utf-8'});
https.get(url, function(response) {
var body = '';
    response.on('data', function(data) {

      body += data;

    });
    response.on('end', function() {

      res.end(body);
    });
  });
}).listen(process.env.PORT || 8080);