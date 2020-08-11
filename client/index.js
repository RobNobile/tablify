import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';

import styles from './styles.css';

import Header from './containers/Header.jsx';
import Main from './containers/Main.jsx';

function App() {
  console.log('!!!React App!!!')
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));