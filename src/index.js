import {join} from 'lodash';
import './style.css';
import Icon from './icon.gif';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');
  let p = document.createElement('p');
  let myIcon;
  

  element.innerHTML = join(['Hello', 'webpack', 'fanergessss'], ' ');
  element.classList.add('hello');

  myIcon = new Image();
  myIcon.src = './';
  p.innerHTML = Data;
  element.appendChild(p);
  element.appendChild(myIcon);
  
  console.log(Data)

  return element;
}

document.body.appendChild(component());