import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home';
import Timer from './Components/timer';
ReactDOM.render(
  <Timer/>,
  document.getElementById('app')
);

module.hot.accept();