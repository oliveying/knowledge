const webshot = require('webshot');

webshot('google.com', 'google.png', function(err) {
  // screenshot now saved to google.png 
});
 
const page = require('webpage').create();
page.open('http://github.com/', function() {
  page.render('github.png');
  phantom.exit();
}); 
