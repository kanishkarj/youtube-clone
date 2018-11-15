
export default {
    updateSearchResults (state, val) {
        console.log("val");
        val = JSON.parse(val);
        state.searchResults = val;
    }
}