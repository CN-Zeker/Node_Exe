import Mock from 'mockjs';
const Random = Mock.Random;
const year = [1999, 2000, 2001, 2002];

const data = Mock.mock({
  'data|16': [
    {
      name: function () {
        return Random.cname();
      },
    },
  ],
});
export default data;
console.log(data);
