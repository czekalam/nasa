export const searchItems = (text) => ({
    type: 'SEARCH_ITEMS',
    text
});
export const loadFromApi = (text) => (dispatch) => {
    dispatch(startLoading());
      fetch(`https://images-api.nasa.gov/search?q=${text}`)
      .then(res=> res.json())
      .then(data=>{
          dispatch(loadData(data.collection.items));
          dispatch(stopLoading());
      })
      .catch(err=>console.log(err));
      
};
const loadData = items => ({
    type: 'LOAD_DATA',
    items
});
export const loadVideoFromApi = (src) => (dispatch) => {
    fetch(src)
        .then(res=> res.json())
        .then(data=> dispatch(loadVideos(data)));
};
export const loadAudioFromApi = (src) => (dispatch) => {
    fetch(src)
    .then(res=> res.json())
    .then(data=> dispatch(loadAudios(data)));
}
export const loadAudios = audios => ({
    type: 'LOAD_AUDIOS',
    audios
});
export const loadVideos = videos => ({
    type: 'LOAD_VIDEOS',
    videos
});
const startLoading = () => ({
    type: 'START_LOADING'
});
const stopLoading = () => ({
    type: 'STOP_LOADING'
})