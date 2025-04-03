import Student   from "./Student.js";
Student.bulkBuild();
function init(){
    Student.bulkCreate([
        {
            name:"张三",
            age:18,
            sex:"男",
            phone:"12345678901",
            email:"123@qq.com",
            address:"北京",
            class:"1班",
            major:"计算机科学与技术",
            grade:"大一",
            score:100,
            remark:"无"
        },
        {
            name:"李四",
        }
    ])
}