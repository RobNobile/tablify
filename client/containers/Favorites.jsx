import React from 'react';
import HeaderFavorites from '../components/HeaderFavorites.jsx';
import MainFavorites from '../components/MainFavorites.jsx';

const Favorites = props => (
  <div>
    <HeaderFavorites />
    <MainFavorites 
      added={props.added}
      addedClick={props.addedClick}
    />
  </div>
)

export default Favorites;