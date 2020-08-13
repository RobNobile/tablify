import React, { Component } from 'react';
import SongContainer from '../components/SongContainer.jsx';
import Searchbox from '../components/Searchbox.jsx';
// import TestApiNames from '../components/TestApiNames.jsx'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchResults: [],
      saveFav: {},
      displayFavs: []
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.handleFavClick = this.handleFavClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount!!!')
    fetch('/favs')
    .then(res => res.json())
    .then(res => console.log('getFavsRes', res))
    .catch(err => console.log('Error: ', err));
  }

  handleInputText(e) {
    this.setState({
      inputText: e,
    });
  }

  handleSearchClick() {
    const searchTerm = this.state.inputText.trim().replace(/\s/g, '+');
    return fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${searchTerm}`)
      .then(data => data.json())
      .then(data => this.setState({
        searchResults: data,
      }));
  }

  handleFavClick(e) {
    const { id, title, artist, tabTypes } = this.state.searchResults[e.target.id];
    this.setState({
      saveFav: {
        song_id: id,
        song: title,
        artist: artist.name,
        tabtypes: tabTypes,
        url: `http://www.songsterr.com/a/wa/song?id=${id}`
      },
    });
    
    const dbData = { 
      song_id: id,
      song: title,
      artist: artist.name,
      tabtypes: tabTypes,
      url: `http://www.songsterr.com/a/wa/song?id=${id}`
    };
    fetch('/favs', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dbData),
    })
    .then(res => res.json())
    .then(res => console.log('res!!!', res))
    .catch(err => console.log('Error: ', err));
  };

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