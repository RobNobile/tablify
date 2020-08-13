import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';

import Master from './containers/Master.jsx';

import styles from './styles.css';

function App() {
  return <Master/>
}

ReactDOM.render(<App />, document.getElementById('root'));