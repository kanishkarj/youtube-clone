<template>
    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
    <v-layout pt-3 row>
        <v-select xs6 sm6
            v-bind:items="sortList" 
            v-model="selectedSort" 
            label="Sort By" 
            @change="SortList">
        </v-select>
        <v-spacer/>
        <v-btn
            @click="AscDscSort">
            Reverse
        </v-btn>
        <v-spacer/>
        <v-select xs6 sm6
            v-bind:items="filters" 
            v-model="selectedFilters" 
            label="Filters" 
            multiple
            @change="setFilters">
        </v-select>
    </v-layout>
        <v-layout>
            <v-flex xs12 sm12>
            <v-card>
                <v-container grid-list-xs fluid>
                <v-layout row wrap>
                    <v-flex
                    v-for="(item,index) in searchResultsDisplay"
                    :key="index"
                    xs4
                    pa-2
                    >
                        <v-card height="100%" hover @click.native="openVideo(item.id)">
                            <v-img
                            :src="item.snippet.thumbnails.high.url"
                            aspect-ratio="2"
                            ></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <v-layout row>
                                        <v-flex xs6 class="body-2">
                                            {{item.snippet.publishedAt | convTime}}
                                        </v-flex> 
                                        <v-flex xs6 class="body-2 text-xs-right">
                                            {{item.id.kind | kindFilter}}
                                        </v-flex> 
                                    </v-layout>    
                                    <h3 class="headline mb-0">{{item.snippet.title}}</h3>
                                    <div class="body-2">
                                        {{item.snippet.channelTitle}}
                                    </div> 
                                    <div>{{item.snippet.description | trimStr}}</div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
const library = require('../plugins/library');

function TitleCompare(a,b) {
    return a.snippet.title > b.snippet.title; 
}

function DateCompare(a,b) {
    return a.snippet.publishedAt > b.snippet.publishedAt; 
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

export default {
    data: () => ({
      searchResults: null,
      searchResultsDisplay: null, 
      sortList : ["Title","Publish Date"],
      selectedSort:null,
      AscDsc : ["Ascending","Descending"],
      selectedAscDsc:null,
      filters : ["Videos","Playlists","Channels"],
      selectedFilters:[],
    }),
    mounted() {
        this.$store.dispatch('youtubeSearch',this.searchKey);
        console.log(val);
        
        this.searchResults = this.$store.state.searchResults; 
        this.searchResultsDisplay = this.searchResults; 
    },
    methods: {
        SortList() {
            switch(this.selectedSort) {
                case "Title" :
                    this.searchResultsDisplay = this.searchResults.sort(TitleCompare);
                    break;
                case "Publish Date" :
                    this.searchResultsDisplay = this.searchResults.sort(DateCompare);
                    break;
            }
        },
        AscDscSort() {
            this.searchResultsDisplay = this.searchResults.reverse();
        },
        setFilters() {
            var tmp =  this.searchResults.filter(item => {
                var bool = false;
                if(this.selectedFilters.length ==0) {
                    return true;
                } else {
                    this.selectedFilters.forEach((val) => {
                        switch(val) {
                            case "Videos" : 
                                bool = bool | item.id.kind == "youtube#video";
                                break;
                            case "Playlists" : 
                                bool = bool | item.id.kind == "youtube#playlist";
                                break;
                            case "Channels" : 
                                bool = bool | item.id.kind == "youtube#channel";
                                break;
                        }
                    });
                    return bool;
                }
            });
            this.searchResultsDisplay = tmp;
            console.log(tmp.length);
        },
        limitVideos(min,max) {
            var cutLen = BUFFER_SIZE;

            if(max >= this.searchResults.length)
                cutLen = this.searchResults.length;

            this.searchResultsDisplay = this.searchResults.slice(min,cutLen);
        },
        openVideo(item) {
            console.log(item.kind);
            if(item.kind.search("video") != -1) {
                this.$router.push({ name: 'video', params: { id: item.videoId}});
            } else if (item.kind.search("channel") != -1) {
                this.$router.push({ name: 'channel', params: { id: item.channelId}});
            } else if (item.kind.search("playlist") != -1) {
                this.$router.push({ name: 'playlist', params: { id: item.playlistId}});
            }
        }
    },
    computed: {
        storeRes () {
            return this.$store.state.searchResults;
        },
        searchKey() {
            return this.$route.params.key;
        }
    },
    watch: {
        storeRes (val,_) {
            this.searchResults = val; 
        },
        searchResults(val) {
            this.searchResultsDisplay = this.searchResults; 
        },
        searchKey(val) {
            this.$store.dispatch('youtubeSearch',val);
            console.log(val);
            
            this.searchResults = this.$store.state.searchResults; 
            this.searchResultsDisplay = this.searchResults; 

        }
    },
    filters: {
        convTime: library.convTime,
        trimStr: library.trimStr,
        kindFilter: library.kindFilter,        
    }
}
</script>


