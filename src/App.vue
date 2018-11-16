<template>
  <v-app id="inspire">
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue-gray"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span @click="$router.push({ name: 'home'})" class="hidden-sm-and-down">Youtube</span>
      </v-toolbar-title>
      <v-text-field
        v-model="searchKey"
        flat
        solo-inverted
        hide-details
        label="Search"
        class="hidden-sm-and-down"
        @keyup="searchQuery"
      ></v-text-field>
      <v-btn icon @click="searchQuery">
        <v-icon>search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-content> 
        <router-view>

        </router-view>
    </v-content>
  </v-app>
</template>

<script>

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
      searchQuery(arg) {
        if(arg.keyCode == undefined || arg.keyCode == 13) {
          this.$router.push({ name: 'search', params: { key: this.searchKey.split(' ').join('+') }});
          // this.$router.go(this.$router.currentRoute);
        }
        
      }
    }
  }
</script>
