<template>
    <v-layout row ma-5>
    <v-flex xs12 sm10 offset-sm1>
        <div class="container">
            <iframe class="video" :src="`https://www.youtube.com/embed/` + $route.params.id" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br>
        <div class="display-1">{{video.snippet.title}}</div>
        <v-divider></v-divider>
        <div class="body-1">{{video.statistics.viewCount}} Views</div>
        <br>        
        <div class="title">{{video.snippet.channelTitle}}</div>
        <div class="subheading">{{video.snippet.publishedAt | convTime}}</div>
        <br>
        <v-layout row>
            <v-flex xs12 sm10>
                <div class="body-1" v-html="markdownToHTML(video.snippet.description)"></div>
            </v-flex>
            <v-flex xs6 sm1 row>
                <v-icon color="green">fas fa-thumbs-up</v-icon>
                <div class="body-1">{{video.statistics.likeCount}}</div>
            </v-flex>
            <v-flex xs6 sm1 row>
                <v-icon color="red">fas fa-thumbs-down</v-icon>
                <div class="body-1">{{video.statistics.dislikeCount}}</div>
            </v-flex>
        </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
const library = require('../plugins/library');

export default {
    data: () => ({
        video : null,
    }),
    mounted() {
        this.$store.dispatch('getVideoInfo',this.$route.params.id);
    },
    computed: {
        storeRes () {
            return this.$store.state.CurrentlyPlaying;
        }
    },
    watch: {
        storeRes (val,_) {
            this.video = val; 
        }, 
    },
    methods: {
        markdownToHTML: library.markdownToHTML,
    },
    filters: {
        convTime: library.convTime,
    }
}
</script>

<style scoped>
    .container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }
    .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

