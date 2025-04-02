import sequelize from './modules/db.js';
import { syncDB } from './modules/sync.js';
import { addAdmin, deleteAdmin, updateAdmin } from './service/adminService.js';
import { addStudent } from './service/studentService.js';
import StudentData from './mock/mockStudent.js';

// syncDB();

// addAdmin({ loginId: 'admin1', loginPassword: '123456' });
// addAdmin({ loginId: 'admin2', loginPassword: '123456' });
// deleteAdmin({ id: '2' });
// updateAdmin({ id: '2', loginPassword: '18217477218' }).then((res) => {
//   console.log(res);
// });
const res = addStudent(StudentData.data);
// console.log(StudentData);
