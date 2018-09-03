require('es6-promise').polyfill();
import './css/style.css';
import Icon from './asset/icon.gif';
import Data from './asset/data.xml';
import { cube } from './js/math.js';
import { file, parse } from './js/global.js';

// 环境不同的处理
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!');
// }

function component() {

  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'fanergess00006666'], ' ');
  element.classList.add('hello');

  let myIcon = new Image();
  myIcon.src = '';
  element.appendChild(myIcon);

  let p = document.createElement('p');
  p.innerHTML = Data;
  element.appendChild(p);
  

  let btn = document.createElement('button');
  btn.innerHTML = 'click me';
  btn.onclick = e => import(/* webpackChunkName: "print" */ './js/print').then(module => {
    let print = module.default;
    print();
  })
  element.appendChild(btn);

  let pre = document.createElement('pre');
  pre.innerHTML = [
    'fanerge',
    '66666',
    '88888'
  ].join('\n\n');
  element.appendChild(pre);

  return element;
}

console.log($, 'sdf23');

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./js/print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}