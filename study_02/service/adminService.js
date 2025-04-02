import Admin from '../modules/admin.js';

/**
 * 添加管理员
 */
export async function addAdmin(adminObj, optionObj) {
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
}

/**
 * 删除管理员
 */
export function deleteAdmin(adminObj, optionObj) {
  return Admin.destroy({
    where: {
      id: adminObj.id,
    },
  });
}

/**
 * 修改管理员
 */
export function updateAdmin(adminObj, optionObj) {
  return Admin.update(adminObj, {
    where: {
      id: adminObj.id,
    },
  });
}

export function getAdmin(adminObj) {
  return Admin.findOne({
    where: adminObj,
  });
}
