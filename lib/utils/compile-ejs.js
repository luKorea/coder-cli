const path = require('path')
const ejs = require('ejs')

function compileEjs(templateName, data) {
  return new Promise((resolve, reject) => {
    // 获取模板路径
    const filePath = path.resolve(__dirname, `../template/${templateName}`);
    // 渲染文件
    ejs.renderFile(filePath, data, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

module.exports = compileEjs