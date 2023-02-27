// node 子进程
const {
  spawn
} = require('child_process')

function execCommand(...args) {
  return new Promise(resolve => {
    // 1, 开启子进程
    const childProcess = spawn(...args)
    // 2. 获取子进程的输入输出信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    // 3. 监听进程的关闭
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = execCommand