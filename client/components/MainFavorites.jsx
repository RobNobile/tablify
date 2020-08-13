import React, { Component } from 'react';

import FavSongsContainer from './FavSongsContainer.jsx';

class MainFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavs: [],
    };    
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidUpdate() {
    console.log('New container componentDidUpdate!!!')
    if (this.props.added) {
      fetch('/favs')
      .then(res => res.json())
      .then(res => {
        this.setState({
          displayFavs: res,
        });
        console.log(res);
      })
      .catch(err => console.log('Error: ', err))
      this.props.addedClick();
    }
  }

  componentDidMount() {
    console.log('New container componentDidMount!!!')
    fetch('/favs')
    .then(res => res.json())
    .then(res => {
      this.setState({
        displayFavs: res,
      });
      console.log(res);
    })
    .catch(err => console.log('Error: ', err))
  }

  handleDeleteClick(e) {
    const { song_id } = this.state.displayFavs[e.target.id]
    fetch('/favs', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ song_id }),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        displayFavs: res,
      });
      console.log('This res: ', res);
    })
    .catch(err => console.log('Error: ', err))
  };

  render() {
    return (
      <FavSongsContainer 
        displayFavs={this.state.displayFavs}
        handleDeleteClick={this.handleDeleteClick}
      />
    )
  };
};

export default MainFavorites;