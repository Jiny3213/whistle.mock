const fs = require('fs')
const path = require('path')
const program = require('commander')
const { Option } = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
  {
    type: 'input',
    name: 'filename',
    message: '请输入js文件名'
  },
  {
    type: 'input',
    name: 'url',
    message: '输入接口路径(完整路径，host后面的部分，以/开头)'
  },
  {
    type: 'list',
    name: 'type',
    message: '选择mock方式',
    choices: ['router', 'proxy'],
    default: 'router'
  }
]).then(res => {
  let { filename, url, type } = res
  if (!/\.js$/.test(filename)) {
    filename += '.js'
  }
  let template = fs.readFileSync(path.join(__dirname, '../mock/example/template.js'), 'utf8')
  template = template.replace('$url', url).replace('$type', type)
  let writePath = path.join(__dirname, `../mock/api/${filename}`)
  fs.writeFile(writePath, template, 'utf8', err => {
    if (err) {
      console.log(err)
    } else {
      console.log(chalk.green('mock文件创建成功!'))
      console.log(chalk.green(`==============> /mock/api/${filename}`))
    }
  })
})
