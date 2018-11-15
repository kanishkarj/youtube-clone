<template>
  <v-app id="inspire" dark>
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
        <router-view>

        </router-view>
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
import router from './router'

function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

export default {
    data: () => ({
      dialog: true,
      searchKey: "",
      drawer: null,
    }),
    props: {
      source: String
    },
    mounted() {

      },
    methods: {
      searchQuery() {
        // this.$store.dispatch('youtubeSearch',this.searchKey);
        // console.log(router)
        this.$router.push({ name: 'search', params: { key: this.searchKey.split(' ').join('+') }});
        this.$router.go(this.$router.currentRoute);
      }
    }
  }
</script>
