const chalk = require('chalk');
const yargs = require('yargs');
const not = require('./notes.js');
//customize yargs version
yargs.version('1.1.0')
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (){},
}
    console.log('Adding a new note...'))
const note =not();
console.log(note);
console.log(chalk.green.bold.bgMagenta("Success"));
console.log(process.argv)
console.log(yargs.argv)
