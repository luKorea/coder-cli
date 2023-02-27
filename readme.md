# 脚手架开发
1. 配置 package.json
```json
  "bin": {
    "coder": "./lib/index.js"
  },
```

2. 在入口文件顶部配置
```shell
#!/usr/bin/env node
```

3. sudo npm link 建立软连接

4. pnpm add commander 解析终端命令工具

5. pnpm add download-git-repo 下载github仓库

6. pnpm add ejs 模板解析
