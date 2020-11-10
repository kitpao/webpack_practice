import _ from 'lodash';
import './style.css';
// import {myName, yourName} from './myName';
import Icon from './butterfly.jpeg';

function component() {
  const element = document.createElement('div');

  // Lodash is required for next line
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // customized module
  //element.innerHTML = myName('Kit') + ' and ' + yourName('Pao');

  // add image
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
