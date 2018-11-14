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
            part: "snippet",
            key: API_KEY,
        };
        console.log(params);
        axios.get(SEARCH_URL,{
            params
        }).then((data) => {
            console.log(data.data);
        })
    }
}