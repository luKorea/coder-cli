#!/usr/bin/env node

const {
  program
} = require('commander');
const {
  helpOptions
} = require('./core/help-options');
const {
  createVue,
  createReact,
  createVueCpn
} = require('./core/commands');


// 解析命令
helpOptions()

// 增加一些具体的功能
createVue()
createVueCpn()
createReact()

// 解析终端命令
program.parse(process.argv)


// 获取用户输入的参数 { dest: 'src/components' }
if (program.opts().dest) {
  console.log(program.opts().dest);
}