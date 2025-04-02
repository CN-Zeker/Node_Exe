import Mock from 'mockjs';
const Random = Mock.Random;
const year = [1999, 2000, 2001, 2002];

const data = Mock.mock({
  'data|10-50': [
    {
      name: '@cname',
      birthday: function () {
        return `${year[Random.integer(0, 3)]}-` + Random.date('MM-dd');
      },
      age: function () {
        return 2025 - this.birthday.split('-')[0];
      },
      gender: '@pick(["0", "1"])',
      address: '@city(true)',
      mobile: /^182[123456789]\d{7}$/,
      email: '@email',
    },
  ],
});
console.log(data);
export default data;
