import React, { Component } from 'react';
import Sentence from '../components/Sentence.jsx'
import TestApiNames from '../components/TestApiNames.jsx'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <p>HelloLorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam possimus magnam sit eum, earum quaerat provident iusto quibusdam iste, accusantium, consequuntur repudiandae laborum corporis dolorem maiores beatae perspiciatis optio ex.</p>
        <Sentence />
        <TestApiNames />
      </div>
    )
  }
}

export default Main;