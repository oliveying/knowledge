var argv = require('yargs').alias('n', 'name').argv;
console.log(argv);
console.log('argv');
console.log('hello', argv.n);