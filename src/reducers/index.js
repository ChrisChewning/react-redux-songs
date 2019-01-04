
//no args since we won't be changing it. fixed data.
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'No Diggity', duration: '2:22'},
    {title: 'All Star', duration: '3:45'}
  ];
};


//dynamic reducer. selectedSong is defaulted to null.
const selectedSongsReducer = (selectedSong = null, action) => {
  return {
    if(action.type === 'SONG_SELECTED') {
      return action.payload
    }
      return selectedSong;
  }
}

//NOTE: you only have one type. the if else statement is just in case you ever added types.
