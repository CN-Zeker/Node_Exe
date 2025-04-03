import Student from '../modules/Student.js';
import Validator from 'validatorjs';

/** 添加学生信息 */
export async function addStudent(studentsObjList) {
  console.log(studentsObjList);
  const validation = new Validator(studentsObjList,rules);
  if(!validation.passes()) {
    return validation
  }
  return await Student.bulkCreate(studentsObjList);
}
/** 获取学生信息 */
export async function getStudent(studentObj) {
  return await Student.findOne({
    where: studentObj,
  });
}

let data = {
  name: 'John',
  email: 'johndoe@gmail.com',
  age: 28
};

let orules = {
  name: 'required',
  email: 'required|email',
  age: 'min:18'
};

const validation = new Validator(data, orules);

console.log(validation.passes()) // true