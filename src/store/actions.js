const axios = require('axios');

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

const API_KEY = 'AIzaSyBsy4H9e1oxzgqAYLxfeUNdnCYjPinNUyk';

export default {
    youtubeSearch({commit}, query) {
        console.log(query);
        var params = {
            type : "",
            q : query,
            maxResults: "25",
            part: "snippet,contentDetails,statistics",
            key: API_KEY,
        };
        axios.get(SEARCH_URL,{
            params
        }).then((data) => {
            commit('updateSearchResults',JSON.stringify(data.data.items));
        })
    }
}