<template>
  <div id="app">

    <!-- <show-blogs></show-blogs> -->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import Footer from './components/Footer'
import '../static/css/main.css'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader,
    Footer
  }
}
</script>

<style>
#app {
 
}
</style>
