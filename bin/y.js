#!/usr/bin/env node
console.log('定义指令的入口');
const program  = require('commander');
const version = require('../package.json').version;
program
  .option('-x, --xxx', '这里是调试xxx')
program
    .version(version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('init', 'generate a new project from a template')

program.parse(process.argv);