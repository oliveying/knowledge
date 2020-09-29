const fs = require('fs');
const path = require('path');
const http = require('http');


http.createServer(function(req, res) {
  console.log(req.path, req.url, 'ddd');
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, './titles.json'), 'utf8', function(error, file) {
      if (error) {
        console.error(error);
        res.end('server error')
      } else {
        const filedd = JSON.parse(file);
        fs.readFile(path.join(__dirname, './template.html'), 'utf8', function(error, data) {
          if (error) {
            console.error(error);
            res.end('server error');
          } else {
            const tmpl = data.toString();
            const html = tmpl.replace('%', filedd.join('</li><li>'));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html)
          }
        })
     
      }
      
    })
  }
}).listen(3000, function(){
  console.log('listen start 3000')
})