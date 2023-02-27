const {
  program
} = require('commander');
const {
  createVueProjectAction,
  addVueCpnAction,
  createReactProjectAction,
} = require('./actions');
// 创建vue 项目
function createVue() {
  program.command('vue <project> [...others]')
    .description('创建一个vue项目, 例如: coder vue demo --dest 输出路径')
    .action(project => createVueProjectAction(project))
}

// 创建vue cpn
function createVueCpn() {
  program.command('addcpn <cpnname> [...others]')
    .description('创建一个vue组件, 例如: coder addcpn tabbar --dest 输出路径')
    .action(cpnname => addVueCpnAction(cpnname))
}

// 创建 react 项目
function createReact() {
  program.command('react <project> [...others]')
    .description('创建一个react项目, 例如: coder react demo --dest 输出路径')
    .action(project => createReactProjectAction(project))
}

module.exports = {
  createVue,
  createReact,
  createVueCpn
}