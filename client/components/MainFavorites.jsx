import React, { Component } from 'react';

class MainFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavs: []
    };
    // this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  // componentDidMount() {
  //   console.log('New container componentDidMount!!!')
  //   fetch('/favs')
  //   .then(res => res.json())
  //   .then(res => this.setState({
  //     displayFavs: res,
  //   }))
  //   .catch(err => console.log('Error: ', err));
  // }

  // handleFavClick(e) {
  //   const { id, title, artist, tabTypes } = this.state.searchResults[e.target.id];
  //   this.setState({
  //     saveFav: {
  //       song_id: id,
  //       song: title,
  //       artist: artist.name,
  //       tabtypes: tabTypes,
  //       url: `http://www.songsterr.com/a/wa/song?id=${id}`
  //     },
  //   });
    
  //   const dbData = { 
  //     song_id: id,
  //     song: title,
  //     artist: artist.name,
  //     tabtypes: tabTypes,
  //     url: `http://www.songsterr.com/a/wa/song?id=${id}`
  //   };
  //   fetch('/favs', {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(dbData),
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log('res!!!', res))
  //   .catch(err => console.log('Error: ', err));
  // };

  render() {
    return <h1>FavSongContainer</h1>
      // <favSongContainer 
      //   // searchResults={this.state.searchResults}
      //   // handleFavClick={this.handleFavClick}
      // />;
  };
};

export default MainFavorites;