import React from 'react';

const Song = props => {
  return (
    <div id="song">
      <div className="song-details">
        <p><span>Artist: </span>{props.artist}</p>
        <p>
          <span>Song: </span>
          <a href={`http://www.songsterr.com/a/wa/song?id=${props.songId}`} target="_blank">{props.song}</a>
        </p>
        <p><span>Tab Types: </span>{props.tabTypes}</p>
      </div>
      <button className="buttonSave" id={props.index} onClick={e => props.handleFavClick(e)}>Save</button>
      {/* <button className={`buttonSave ${props.songId}`} onClick={e => props.handleFavClick(e.target)}>Save</button> */}
    </div>
  );
};

export default Song;