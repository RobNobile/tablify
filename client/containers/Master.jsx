import React, { Component } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Favorites from './Favorites.jsx';

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    }
    this.addedClick = this.addedClick.bind(this);
  }

  addedClick() {
    this.state.added ? this.setState({ added: false }) : this.setState({ added: true })
    // this.setState({ added: true })
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          added={this.state.added} 
          addedClick={this.addedClick}
        />
        <Favorites 
          added={this.state.added}
          addedClick={this.addedClick}
        />
      </div>
    )
  }
}

export default Master;