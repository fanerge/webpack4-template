import {join} from 'lodash';
import './style.css';
import Icon from './icon.gif';
import Data from './data.xml';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
  let element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack', 'fanergess00006666'], ' ');
  element.classList.add('hello');

  let myIcon = new Image();
  myIcon.src = './';
  element.appendChild(myIcon);

  let p = document.createElement('p');
  p.innerHTML = Data;
  element.appendChild(p);
  

  let btn = document.createElement('button');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;
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

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}