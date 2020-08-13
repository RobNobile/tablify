import React from 'react';

const FavSong = props => {
  return (
    <div id="song">
      <div className="song-details">
        <p><span>Artist: </span>{props.artist}</p>
        <p>
          <span>Song: </span>
          <a href={`${props.url}`} target="_blank">{props.song}</a>
        </p>
        <p><span>Tab Types: </span>{props.tabtypes}</p>
      </div>
      <button className="buttonDelete" id={props.index} onClick={e => props.handleDeleteClick(e)}>Remove</button>
    </div>
  );
};

export default FavSong;