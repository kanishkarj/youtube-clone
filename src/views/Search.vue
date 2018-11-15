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
        <v-flex xs12 ma-3 v-for="(item,index) in searchResultsDisplay" :key="index" >
            <v-card color="grey darken-4">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="item.snippet.thumbnails.high.url"
                    height="200px"
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{item.snippet.title}}</div>
                      <div class="body-2">{{item.snippet.channelTitle }}</div>
                      <v-divider/>
                      <div class="body-2">{{item.snippet.publishedAt | convTime}}</div>
                      <br>
                      <div class="body-1">{{item.snippet.description}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>

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
        console.log(this.$route.params.key);
        this.$store.dispatch('youtubeSearch',this.$route.params.key);
        
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
        }
    },
    computed: {
        storeRes () {
            return this.$store.state.searchResults;
        }
    },
    watch: {
        storeRes (val,_) {
            this.searchResults = val; 
        },
        searchResults(val) {
            this.searchResultsDisplay = this.searchResults; 
        }
    },
    filters: {
        convTime: function (value) {
            if (!value) return ''
            value = value.toString()
            var dt = new Date(value);
            return formatDate(dt);
        }
    }
}
</script>


