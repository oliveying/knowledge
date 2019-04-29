const Fs = require('fs');
const Path = require('path');

const lableCodeStr = Fs.readFileSync(Path.join(__dirname, './txt/service.txt'), 'utf8');
const lableCodeStr1 = Fs.readFileSync(Path.join(__dirname, './txt/service.txt'), 'utf8');

const codeLineArt = lableCodeStr.split('\n').join('');
const codeLineArt1 = lableCodeStr1.split('\n').join('');

console.log(codeLineArt === codeLineArt1)
console.log(codeLineArt)

// let arr = groupArray(codeArr, 10)
// Fs.writeFileSync(Path.join(__dirname, ''), JSON.stringify(arr));

