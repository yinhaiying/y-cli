#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
// 好看的加载
const ora = require('ora');
// 拉取远程仓库
const download = require('download-git-repo');
const tplObj = require(`${__dirname}/../template`);

// 这里是用来作为提示的信息。不影响其他功能
program
  .usage('<template-name> [project-name]')
program.parse(process.argv);

if(program.args.length < 1){
    return program.help();
}

// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name

let templateName = program.args[0];
let projectName = program.args[1];

// 校验一下参数
if (!tplObj[templateName]) {
    console.log(chalk.red('\n Template does not exit! \n '))
    return
  }
if (!projectName) {
console.log(chalk.red('\n Project should not be empty! \n '))
return
}

let url = tplObj[templateName];

// 提示开始拉代码
console.log(chalk.green('\n Start generating... \n'));

// 出现加载图标

const spinner = ora('Downloading...');
spinner.start();

console.log('url:' +url);
console.log('projectName:'+projectName);

// 执行下载方法并传入参数
download (
    url,
    projectName,
    err => {
      if (err) {
        spinner.fail();
        console.log(chalk.red(`Generation failed. ${err}`))
        return
      }
      // 结束加载图标
      spinner.succeed();
      console.log(chalk.green('\n Generation completed!'))
      console.log('\n To get started')
      console.log(`\n    cd ${projectName} \n`)
    }
  )




