/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// eslint-disable-next-line no-undef
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

const old = new OldSyntax();
console.log(old);

class NewSyntax {
  name = 'Mak';

  getGreeting = () => {
    return `Hi! My name is ${this.name}`;
  }
}

const newS = new NewSyntax();
const greeting = newS.getGreeting();
console.log(greeting);
