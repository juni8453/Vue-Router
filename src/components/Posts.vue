<template>
  <div v-for="(post, i) in posts" :key="i">
    <!-- $router.push() 페이지 이동 함수-->
    <h5 @click="$router.push('/posts/' + post.number)">
      {{post.number}}. {{post.title}}
    </h5>
    <p>{{post.content}}</p>
    <p>{{post.date}}</p>
  </div>
</template>

<script>

export default {
  name: "Posts",
  props: {
    posts: Array,
  },
}
</script>

<style scoped>

</style>