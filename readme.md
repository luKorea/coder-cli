# 脚手架开发
1. 配置 package.json
```json
  "bin": {
    "coder": "./lib/index.js"
  },
```

2. 在入口文件顶部配置
```
#!/usr/bin/env node
``` 

3. sudo npm link 建立软连接