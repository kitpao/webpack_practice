import _ from 'lodash';
import printMe from './print.js';
// import {myName, yourName} from './myName';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash is required for next line
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // customized module
  //element.innerHTML = myName('Kit') + ' and ' + yourName('Pao');

  // add image

  return element;
}

document.body.appendChild(component());
