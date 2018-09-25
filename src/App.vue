<template>
  <div id="app">

    <!-- <show-blogs></show-blogs> -->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

import '../static/css/main.css'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>

<style>
#app {
 
}
</style>
