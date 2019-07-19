// const { urlArray, getNowData } = require('./locals.js');
// var nowdata = getNowData;
function checkTime(i) {
  if (i < 10) i = '0' + i;
  return i;
}


var getNowData = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  month = checkTime(month);
  day = checkTime(day);
  return (year + '-' + month + '-' + day)
}
var nowDate = getNowData();
var domainUrl = 'https://www.baidu.com';

var urlArray = [
  {
    name: '百度首页',
    namepinyin: 'baidu',
    path: '/'
  }
]

var page;
var num = -1;
function process() {
  num ++;
  // console.log(num, urlArray.length )
  if (urlArray.length === num) {
    phantom.exit();
  } else {
    //remove the first item of an array
    var url = urlArray[num];
    //open a page
    page = require('webpage').create();

    //store the requested url in a separate variable
    var currentUrl = domainUrl + url.path;

    console.log('current 名称：' + url.name + ', url:' + currentUrl)

    page.open(currentUrl, onFinishedLoading);

    page.onNavigationRequested = function(url, type, willNavigate, main) {
      console.log('\n' + currentUrl + '\nredirecting to \n' + url);
    }

  }
}

var txt = '';
var obj = {};
function onFinishedLoading(status) {
  console.log('status', status)
  obj = {
    name: urlArray[num].name,
    namepinyin: urlArray[num].namepinyin,
    path: urlArray[num].path
  }
  if (status === 'fail') {
    txt += 'fail: name:' + obj.name + 'url: ' + obj.url + '\t';
  } else {
    //phantom.exit();
    // page.render('./webshot/images/' + nowDate + '/' + obj.namepinyin + '.png');

    // console.log('./webshot/images/' + 'reference' + '/' + obj.namepinyin + '.png')
    // page.render('./webshot/images/' + 'reference' + '/' + obj.namepinyin + '.png');
    page.render('./webshot/images/' + nowDate + '/' + obj.namepinyin + '.png');

    // window.setTimeout(function () {
    // }, 1500);
  }
  page.release();
  process();
}
process();


