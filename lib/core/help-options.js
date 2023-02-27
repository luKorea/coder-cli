const {
  program
} = require('commander')

function helpOptions() {
  // 1. 配置解析版本号
  const version = require('../../package.json').version
  program.version(version, '-v --version')

  // 2. 配置其他命令
  program.option('-d --dest <dest>', "-d --dest 输出到指定文件夹中")

}

module.exports = {
  helpOptions
}