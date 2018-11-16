const axios = require('axios');

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos'

const API_KEY = 'AIzaSyBsy4H9e1oxzgqAYLxfeUNdnCYjPinNUyk';

export default {
    youtubeSearch({commit}, query) {
        var params = {
            type : "",
            q : query,
            maxResults: "50",
            part: "snippet",
            key: API_KEY,
        };
        console.log(query);
        axios.get(SEARCH_URL,{
            params
        }).then((data) => {
            commit('updateSearchResults',JSON.stringify(data.data.items));
        })
    },
    getVideoInfo({commit}, id) {
        var params = {
            id: id,
            part: "snippet,contentDetails,statistics",
            key: API_KEY,
        };
        axios.get(VIDEO_URL,{
            params
        }).then((data) => {
            commit('updateCurrentVideo',JSON.stringify(data.data));
        })
    }
}