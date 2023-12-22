<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link class="a_style m-1" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="a_style m-1" to="/posts">Posts</router-link>
          </li >
        </ul>
      </div>
    </div>
  </nav>

  <!--  <Post v-for="(post, i) in posts" :key="i" :post="post" />
  router 를 사용하는 것으로 변경
  -->
  <router-view
      :posts="posts"
  />

</template>

<script>
import posts from './assets/posts.js'

export default {
  name: 'App',
  data() {
    return {
      posts: posts,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.a_style {
  text-decoration: none;
  color: black;
}

</style>
