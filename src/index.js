import {join} from 'lodash';
import './style.css';
import Icon from './icon.gif';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack', 'fanergessss'], ' ');
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

  


  return element;
}

document.body.appendChild(component());