import React from 'react';
import FavSong from './FavSong.jsx'

const FavSongsContainer = props => {
  const results = props.displayFavs.map((song, index) => {
    return <FavSong 
      key={`favSong${index}`}
      index={index}
      handleDeleteClick={props.handleDeleteClick}
      artist={song.artist}
      song={song.song}
      songId={song.id}
      tabtypes={song.tabtypes}
      url={song.url}
    />
  })
  
  return (
    <div id="favSongsContainer">
      {results}
    </div>
  );
};

export default FavSongsContainer;