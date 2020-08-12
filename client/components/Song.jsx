import React from 'react';

const Song = props => {
  return (
    <div id="song">
      <div className="song-details">
        <p><span>Artist: </span>{props.artist}</p>
        <p><span>Song: </span>{props.song}</p>
        <p><span>Tab Types: </span>{props.tabTypes}</p>
        {/* {props.songId} */}  
      </div>
      <button className="buttonSave" onClick={props.handleFavClick}>Save</button>
    </div>
  );
};

export default Song;