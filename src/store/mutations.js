
export default {
    updateSearchResults (state, val) {
        console.log("val");
        val = JSON.parse(val);
        state.searchResults = val;
    },
    updateCurrentVideo (state, val) {
        val = JSON.parse(val);
        state.CurrentlyPlaying = val.items[0];
    },
    updateCurrentChannel (state, val) {
        val = JSON.parse(val);
        state.CurrentChannel = val.items[0];
    },
    updateCurrentPlaylist (state, val) {
        val = JSON.parse(val);
        state.CurrentChannelPlaylists = val.items;
    }
}