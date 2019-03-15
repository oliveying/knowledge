const cheerio = require('cheerio');

var str = '<text class="tyc-num" >技院服和、技院培训、技院推广；于计、期发、销售计算然<font>软件；经济拉息咨询；出...'
var html = cheerio.load(`<div>${str}</div>`).html();
console.log(html)
