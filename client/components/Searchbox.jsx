import React from 'react';

const Searchbox = props => {
  return (
    <div id="searchbox">
      <label htmlFor="tab-search">Enter artist or song:</label><br />
      <input onChange={e => props.handleInputText(e.target.value)} id="tab-search" type="text"/>
      <button onClick={props.handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbox;