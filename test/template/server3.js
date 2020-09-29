const fs = require('fs');
const path = require('path');
const http = require('http');


http.createServer(function (req, res) {
  getTitles(res);
}).listen(3000, function () {
  console.log('listen start 3000')
})

function getTitles(res) {
  fs.readFile(path.join(__dirname, './titles.json'), 'utf8', function (error, data) {
    if (error) return hadError(error, res);
    getTemplate(res, data);

  })
}

function getTemplate(res, file) {
  const filedd = JSON.parse(file);
  fs.readFile(path.join(__dirname, './template.html'), 'utf8', function (error, data) {
    if (error) return hadError(error, res);
    formatHtml(res, data, filedd);
  })
}

function formatHtml(res, data, filedd) {
  const tmpl = data.toString();
  const html = tmpl.replace('%', filedd.join('</li><li>'));
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(html)
}

function hadError(error, res) {
  console.error(error);
  res.end('server error')
}