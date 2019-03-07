const path = require('path');
path.basename('/foo/bar/baz/asdf/quux.html')
// 返回: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// 返回: 'quux'

path.extname('index.html')
// 返回: '.html'

path.extname('index.coffee.md')
// 返回: '.md'

path.extname('index.')
// 返回: '.'

path.extname('index')
// 返回: ''

path.extname('.index')
// 返回: ''

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
console.log(path.join('/foo', 'bar', 'baz','asdf', 'dddd', '..'))