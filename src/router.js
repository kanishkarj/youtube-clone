import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Video from './views/Video.vue'
import Channel from './views/Channel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:key',
      name: 'search',
      component: Search
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Video
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: Channel
    }
  ]
})
