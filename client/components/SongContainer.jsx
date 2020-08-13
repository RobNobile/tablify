import React from 'react';
import Song from './Song.jsx'

const SongContainer = props => {
  const results = props.searchResults.map((song, index) => {
    return <Song 
      key={`Song${index}`}
      index={index}
      handleFavClick={props.handleFavClick}
      artist={song.artist.name}
      song={song.title}
      songId={song.id}
      tabTypes={song.tabTypes}
    />
  })
  
  return (
    <div id="song-container">
      {results}
    </div>
  );
};

export default SongContainer;