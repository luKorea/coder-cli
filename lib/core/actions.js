// 将函数包裹为 promise
const {
  promisify
} = require('util')
const downloadRepo = promisify(require('download-git-repo'))
const {
  VUE_REPO,
  REACT_REPO
} = require('../config/repo');
const compileEjs = require('../utils/compile-ejs');
const writeFile = require('../utils/write-file');
const {
  program
} = require('commander')

// 处理 window 适配
const commandName = process.platform === 'win32' ? 'npm.cmd' : 'npm'

// 统一处理下载
/**
 * 
 * @param {string} repo  仓库地址
 * @param {string} project 下载到哪个目录下
 */
function downloadProject(repo, project) {
  try {
    downloadRepo(repo, project, {
      clone: true
    })
  } catch (error) {
    console.log(error, 'error message');
  }
}


// vue
async function createVueProjectAction(project) {
  await downloadProject(VUE_REPO, project)
}

// vue cpn
async function addVueCpnAction(cpnName) {
  // 1. 创建一个组件: 编写组件的模板, 根据内容给模板填充数据
  const result = await compileEjs('component.vue.ejs', {
    name: cpnName,
    lowerName: cpnName.toLowerCase()
  })
  // 2. 将解析后的内容写入到文件中
  // 获取用户输入的地址, 如果没有输入, 则用默认地址
  const dest = program.opts().dest || 'src/components'
  await writeFile(`${dest}/${cpnName}.vue`, result)
}

async function createReactProjectAction(project) {
  await downloadProject(REACT_REPO, project)
}

module.exports = {
  createVueProjectAction,
  addVueCpnAction,
  createReactProjectAction
}