import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Home/>,
  document.getElementById('app')
);

module.hot.accept();