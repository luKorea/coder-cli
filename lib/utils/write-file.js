const fs = require('fs')

async function writeFile(path, content) {
  // 优化 判断文件夹是否存在, 不存在则创建
  return fs.promises.writeFile(path, content)
}

module.exports = writeFile