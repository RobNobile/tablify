import React, { Component } from 'react';
import SongContainer from '../components/SongContainer.jsx';
import Searchbox from '../components/Searchbox.jsx';
// import TestApiNames from '../components/TestApiNames.jsx'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchResults: []
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
  }

  componentDidMount() {
    // return fetch('http://www.songsterr.com/a/ra/songs.json?pattern=Marley')
    //   .then(data => data.json())
    //   .then(data => console.log(data));
  }

  handleInputText(e) {
    this.setState({
      inputText: e,
    });
  }

  handleSearchClick() {
    const searchTerm = this.state.inputText.trim().replace(/\s/g, '+');
    console.log(searchTerm)
    return fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${searchTerm}`)
      .then(data => data.json())
      .then(data => this.setState({
        searchResults: data,
      }));
  }

  handleFavClick() {
    console.log('Fav!')
  }

  render() {
    return (
      <div id="main">
        <Searchbox
          handleSearchClick={this.handleSearchClick}
          handleInputText={this.handleInputText}
        />
        <SongContainer 
          searchResults={this.state.searchResults}
          handleFavClick={this.handleFavClick}
        />
        {/* <TestApiNames /> */}
      </div>
    );
  };
};

export default Main;