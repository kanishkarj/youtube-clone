<template>
    <v-layout row ma-5>
        <v-flex xs12 sm10 offset-sm1>
             <v-flex xs12 sm12>
                <v-card>
                    <v-layout row ma-2 pa-2 pt-5>
                        <v-flex xs3 sm3>
                            <v-img :src="channel.snippet.thumbnails.high.url" aspect-ratio="2"/>
                        </v-flex>
                        <v-flex xs9 sm9>
                            <div class="headline">
                                {{channel.snippet.title}}
                            </div>
                            <v-divider></v-divider>
                            <br>
                            <div class="body-1">
                                {{channel.snippet.description}}
                            </div>
                        </v-flex>
                    </v-layout>               
                    <v-divider></v-divider>
                    <div class="headline text-md-center" row pt-3>
                        Playlists
                    </div>
                    <v-layout row ma-2 pa-2 > 
                        <v-container grid-list-xs fluid>
                        <v-layout row wrap>
                            <v-flex
                            v-for="(item,index) in playlists"
                            :key="index"
                            xs4
                            pa-2
                            >
                        <v-card height="100%" hover @click.native="openPlaylist(item)">
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
                                    <div>{{item.snippet.description}}</div>
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
        channel : null,
        playlists : null,
    }),
    mounted() {
        this.$store.dispatch('getChannelInfo',this.$route.params.id);
        this.$store.dispatch('getChannelPlaylists',this.$route.params.id);
    },
    computed: {
        storeRes () {
            return this.$store.state.CurrentChannel;
        },
        storePlaylist () {
            return this.$store.state.CurrentChannelPlaylists;
        },
    },
    watch: {
        storeRes (val,_) {
            this.channel = val; 
        },
        storePlaylist (val) {
            this.playlists = val; 
        },
    },
    methods: {
        markdownToHTML: library.markdownToHTML,
        openPlaylist(item) {
            // console.log(item.id);
            this.$router.push({ name: 'playlist', params: { id: item.id}});
            this.$router.go(this.$router.currentRoute);
        },
    },
    filters: {
        kindFilter: library.kindFilter,        
        convTime: library.convTime,
    }
}
</script>

