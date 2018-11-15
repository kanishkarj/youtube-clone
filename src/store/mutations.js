import router from '../router'

export default {
    updateSearchResults (state, val) {
        val = JSON.parse(val);
        state.searchResults = val;
        console.log(val);
        router.push({ name: 'search'})
    }
}