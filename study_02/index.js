// import sequelize from './modules/db.js';
// import { syncDB } from './modules/sync.js';
// import { addAdmin, deleteAdmin, updateAdmin } from './service/adminService.js';
// import { addStudent } from './service/studentService.js';
// import StudentData from './mock/mockStudent.js';
import moment from 'moment';
moment.locale('zh-cn');

// const m = moment.utc(new Date(), ['YYYY-MM-DD HH:mm:ss'], true).fromNow();
const m = +moment();

// syncDB();

// addAdmin({ loginId: 'admin1', loginPassword: '123456' });
// addAdmin({ loginId: 'admin2', loginPassword: '123456' });
// deleteAdmin({ id: '2' });
// updateAdmin({ id: '2', loginPassword: '18217477218' }).then((res) => {
//   console.log(res);
// });
// const res = addStudent(StudentData.data);
console.log(m);
// console.log(StudentData);
