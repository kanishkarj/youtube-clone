
export default {
    updateSearchResults (state, val) {
        console.log("val");
        val = JSON.parse(val);
        state.searchResults = val;
    },
    updateCurrentVideo (state, val) {
        val = JSON.parse(val);
        state.CurrentlyPlaying = val.items[0];
    }
}