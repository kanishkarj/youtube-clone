# youtube-client

This is a sample project showcasing the use of Youtube Data API v3. 

### Features

#### Search

The user can search for entries in the search bar which is available on top of the page. After entering the search term, press enter/search button. This will redirect to the search page.

#### Search Page

The Search results will be showed up here. The user can :
* sort the results by Date Published or by title.
* Reverse the list.
* Filter the list by videos/playlists/channels.
* Click any of the entries to open it in the respective Video/Channel/Playlist page.

#### Video Player Page

This page allows the user to :
* Watch the video selected.
* View the details of the video.

#### Playlist Page

This page allows the user to :
* List all the videos in the playlist.
* Clicking the video will redirect the user to the respective Video player page.
* View the details of the playlist.

#### Channel Page

This page allows the user to :
* View the details of the channel.
* List all the playlists in the channel.
* Clicking the playlist will redirect the user to the respective Playlist page.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

---------------------------------------------------------

## Build Instructions

* Clone the repository onto the system :
    ```shell
    git clone https://github.com/kanishkarj/youtube-clone
    ```
* Open terminal and move into the project folder :
    ```shell
    cd youtube-clone
    ```
* Install Yarn onto your computer. [Click here](https://yarnpkg.com/lang/en/docs/install/#debian-stable) to find instructions to install it on your system.
* Execute the following commands on the console to launch the application :
    ```shell
    yarn install
    yarn run serve
    ```

