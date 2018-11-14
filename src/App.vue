<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="deep-purple darken-4"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        v-model="searchKey"
        flat
        solo-inverted
        hide-details
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-btn icon @click="searchQuery">
        <v-icon>search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex v-for="i in 3" :key="`3${i}`" xs12 md3>
                    <v-card>
                        <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Top 10 Australian beaches</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        </v-img>
                        <v-card-title>
                        <div>
                            <span class="grey--text">Number 10</span><br>
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-app>
</template>

<script>

export default {
    data: () => ({
      dialog: true,
      drawer: null,
      searchKey: "",
    }),
    props: {
      source: String
    },
    mounted() {
      },
    methods: {
      searchQuery() {
        this.$store.dispatch('youtubeSearch',this.searchKey);
      }
    }
  }
</script>
