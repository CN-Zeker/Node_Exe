import Student from '../modules/Student.js';

/** 添加学生信息 */
export async function addStudent(studentsObjList) {
  console.log(studentsObjList);
  const student = await Student.bulkCreate(studentsObjList);
  return student;
}
/** 获取学生信息 */
export async function getStudent(studentObj) {
  const student = await Student.findOne({
    where: studentObj,
  });
  return student;
}
