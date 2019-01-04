//action creator here.

export const selectSong = () => {
  //return an action.
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

//export named default fn allows us to export many diff. fn. from each file.
//then you import { selectSong } which means you are importing a named export.
