import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'React testing');
ReactDOM.render(template, document.querySelector('#app'));