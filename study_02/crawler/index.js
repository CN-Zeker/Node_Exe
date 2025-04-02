import axios from 'axios';
import * as cheerio from 'cheerio';

// const axiosIns = axios.create({
//   baseURL: 'https://www.baidu.com',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' },
// });
async function test() {
  const res = await axios.get('https://book.douban.com/');
  // console.log(res.data);
  handleHTML(res.data);
}

function handleHTML(html) {
  const $ = cheerio.load(html);
  const imagesURLList = $('.bd li .cover a').map((i, item) => {
    return item.attribs['href'];
  });
  console.log(imagesURLList);
}
test();
