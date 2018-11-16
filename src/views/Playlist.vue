<template>
    <v-layout row ma-5>
        <v-flex xs12 sm10 offset-sm1>
             <v-flex xs12 sm12>
                <v-card>
                    <v-layout row ma-2 pa-2 pt-5>
                        <v-flex xs3 sm3>
                            <v-img :src="playlistData.snippet.thumbnails.high.url" aspect-ratio="2"/>
                        </v-flex>
                        <v-flex xs9 sm9 pa-2>
                            <div class="headline">
                                {{playlistData.snippet.title}}
                            </div>
                            <v-divider></v-divider>
                            <div class="body-1">
                                {{playlistData.snippet.description}}
                            </div>
                        </v-flex>
                    </v-layout>               
                    <v-divider></v-divider>
                    <div class="headline text-md-center" row pt-3>
                        Videos
                    </div>
                    <v-layout row ma-2 pa-2 > 
                        <v-container grid-list-xs fluid>
                        <v-layout row wrap>
                            <v-flex
                            v-for="(item,index) in playlist"
                            :key="index"
                            xs4
                            pa-2
                            >
                        <v-card height="100%" hover @click.native="openVideo(item)">
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
                    </v-layout>
                </v-card>
             </v-flex>
        </v-flex>
  </v-layout>
</template>

<script>
const library = require('../plugins/library');

export default {
    data: () => ({
        playlist : null,
        playlistData : null,
    }),
    mounted() {
        this.$store.dispatch('getPlaylist',this.$route.params.id);
        this.$store.dispatch('getPlaylistVideos',this.$route.params.id);
    },
    computed: {
        storeRes () {
            return this.$store.state.CurrentPlaylist;
        },
        storeResPl () {
            return this.$store.state.CurrentPlaylistData;
        }, 
        searchId() {
            return this.$route.params.id;
        }
    },
    watch: {
        storeRes (val,_) {
            this.playlist = val; 
            console.log(val);
        },
        storeResPl (val) {
            this.playlistData = val;
        },
        searchId(val) {
            this.$store.dispatch('getPlaylist',this.$route.params.id);
            this.$store.dispatch('getPlaylistVideos',this.$route.params.id);
        }
    },
    methods: {
        markdownToHTML: library.markdownToHTML,
        openVideo(item) {
            this.$router.push({ name: 'video', params: { id: item.snippet.resourceId.videoId}});
            // this.$router.go(this.$router.currentRoute);
        }
    },
    filters: {
        convTime: library.convTime,
        kindFilter: library.kindFilter,        
        trimStr: library.trimStr,
    }
}
</script>

