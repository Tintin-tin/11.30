#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer')
const  userlist=require('./userlist')
const fs=require('fs')

const promptList = [{
            type: 'input',
            message: '设置一个用户名:',
            name: 'name',
            default: "test_user" // 默认值
        },{
            type: 'input',
            message: '输入你的身份证号:',
            name: 'shenfen'
        },{
            type: 'password',
            message: '输入你的密码:',
            name: 'mima'
        }];

program
    .version('1.0.0')
    .command('my-login')
    .description('It is my cli')
    .action(()=>{
        inquirer.prompt(promptList).then(answers =>{
            if(userlist.findIndex(item=>item.shenfen===answers.shenfen)===-1){
                userlist.push(answers)
                fs.writeFileSync('./userlist.json',JSON.stringify(userlist))
            }else{
                console.log('用户已存在');
                
            }
        })
    })

program.parse(process.argv)