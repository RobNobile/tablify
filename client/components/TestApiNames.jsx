import React, { Component } from 'react';

class TestApiNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testNames: null
    };
  }
  
  componentDidMount() {
    // uncomment the below for proxy challenge
    fetch('/api/testNames')
      .then(response => response.json())
      .then(testNames => this.setState({testNames}));
  }
  
  render() {
    if (!this.state.testNames) return null;
    console.log('TESTING')
    const names = this.state.testNames.map(name => <li key={name.id}>{name.name}</li>);
    return (
      <div>
        <div>TestApiNames:</div>
        <ul>{names}</ul>
      </div>
    );
  }
}

export default TestApiNames;