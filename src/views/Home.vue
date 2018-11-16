<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-layout pa-3 row>
        <v-card>
          <v-flex pa-5>
            <h1><a id="youtubeclient_0"></a>youtube-client</h1>
            <p>This is a sample project showcasing the use of Youtube Data API v3.</p>
            <h3><a id="Features_4"></a>Features</h3>
            <br>
            <h4><a id="Search_6"></a>Search</h4>
            <p>The user can search for entries in the search bar which is available on top of the page. After entering
              the search term, press enter/search button. This will redirect to the search page.</p>
            <h4><a id="Search_Page_10"></a>Search Page</h4>
            <p>The Search results will be showed up here. The user can :</p>
            <ul>
              <li>sort the results by Date Published or by title.</li>
              <li>Reverse the list.</li>
              <li>Filter the list by videos/playlists/channels.</li>
              <li>Click any of the entries to open it in the respective Video/Channel/Playlist page.</li>
            </ul>
            <br>
            <h4><a id="Video_Player_Page_18"></a>Video Player Page</h4>
            <p>This page allows the user to :</p>
            <ul>
              <li>Watch the video selected.</li>
              <li>View the details of the video.</li>
            </ul>
            <br>
            <h4><a id="Playlist_Page_24"></a>Playlist Page</h4>
            <p>This page allows the user to :</p>
            <ul>
              <li>List all the videos in the playlist.</li>
              <li>Clicking the video will redirect the user to the respective Video player page.</li>
              <li>View the details of the playlist.</li>
            </ul>
            <br>
            <h4><a id="Channel_Page_31"></a>Channel Page</h4>
            <p>This page allows the user to :</p>
            <ul>
              <li>View the details of the channel.</li>
              <li>List all the playlists in the channel.</li>
              <li>Clicking the playlist will redirect the user to the respective Playlist page.</li>
            </ul>

          </v-flex>

        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    }
  }
</script>