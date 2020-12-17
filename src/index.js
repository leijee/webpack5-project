import './index.less';
import timg from './images/timg.jpg';
import Data from './data.xml';
import printMe from './print.js';
function component() {
    // var element = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.innerHTML = "123123";
    var img = document.createElement('img');
    img.src = timg
    console.log('测试一下');
    console.log('Data',Data)
    return img;
}
console.log('测试')
printMe()

if(module.hot){
  console.log('module.hot33',module.hot)
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!222');
    printMe();
  })
}
  
document.body.appendChild(component());