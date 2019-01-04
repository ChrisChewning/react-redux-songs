import React from 'react';
import SongList from './SongList';

//fn component bc redux deals w/ state. simpler, more straightforward app component.

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  )

}

export default App;
