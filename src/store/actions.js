const axios = require('axios');

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos'
const CHANNEL_URL = 'https://www.googleapis.com/youtube/v3/channels'
const PLAYLIST_URL = 'https://www.googleapis.com/youtube/v3/playlists'
const PLAYLIST_VIDEO_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
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
            console.log(data.data);
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
    },
    getChannelInfo({commit}, id) {
        var params = {
            id: id,
            part: "snippet,contentDetails,statistics",
            key: API_KEY,
        };
        axios.get(CHANNEL_URL,{
            params
        }).then((data) => {
            commit('updateCurrentChannel',JSON.stringify(data.data));
        })
    },
    getChannelPlaylists({commit}, id) {
        var params = {
            channelId : id,
            maxResults: "50",
            part: "snippet",
            key: API_KEY,
        };
        axios.get(PLAYLIST_URL,{
            params
        }).then((data) => {
            commit('updateCurrentPlaylist',JSON.stringify(data.data));
        })
    },
    getPlaylistVideos({commit}, id) {
        var params = {
            playlistId : id,
            maxResults: "50",
            part: "snippet",
            key: API_KEY,
        };
        axios.get(PLAYLIST_VIDEO_URL,{
            params
        }).then((data) => {
            commit('updateCurrentPlaylistVideo',JSON.stringify(data.data));
        })
    },
    getPlaylist({commit}, id) {
        var params = {
            id : id,
            maxResults: "50",
            part: "snippet",
            key: API_KEY,
        };
        axios.get(PLAYLIST_URL,{
            params
        }).then((data) => {
            commit('updateCurrentPlaylistData',JSON.stringify(data.data.items[0]));
        })
    }
}