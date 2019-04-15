const Fs = require('fs');
const Path = require('path');

const lableCodeStr = Fs.readFileSync(Path.join(__dirname, './txt/seo.txt'), 'utf8');

const codeLineArt = lableCodeStr.split('\n');

const codeObj = {};

let arr = groupArray(codeArr, 10)
Fs.writeFileSync(Path.join(__dirname, ''), JSON.stringify(arr));

