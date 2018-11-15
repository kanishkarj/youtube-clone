<template>
    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
    <v-layout row>
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
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in searchResults">
            <v-list-tile
              :key="index"
              avatar
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="item.snippet.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.snippet.description"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
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

export default {
    data: () => ({
      searchResults: null, 
      sortList : ["Title","Publish Date"],
      selectedSort:null,
      AscDsc : ["Ascending","Descending"],
      selectedAscDsc:null,
      filters : ["Videos","Playlists","Channels","Users"],
      selectedFilters:null,
      min:0,
      max:25,
    }),
    mounted() {
        this.searchResults = this.$store.state.searchResults;
    },
    methods: {
        SortList() {
            switch(this.selectedSort) {
                case "Title" :
                    this.searchResults.sort(TitleCompare);
                    break;
                case "Publish Date" :
                    this.searchResults.sort(DateCompare);
                    break;
            }
        },
        AscDscSort() {
            this.searchResults.reverse();
        },
        setFilters() {
            console.log(this.selectedFilters);
        },
    },
    computed: {
        storeRes () {
            return this.$store.state.searchResults;
        }
    },
    watch: {
        storeRes (val,_) {
            this.searchResults = val; 
        }
    }
}
</script>


