var argv = require('yargs').option('n', {
  alias: 'name',
  demand: true,
  default: 'tom',
  describe: 'your name',
  type: 'string',
  boolean: true
})
  .usage('Usage: hello [options]')
  .example('hello -n tom', 'say hello to Tom')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2019')
  .argv;
console.log('hello', argv.n);

