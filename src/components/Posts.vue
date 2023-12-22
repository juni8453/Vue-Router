<template>
  <div v-for="(post, i) in posts" :key="i">
    <h5>{{post.number + 1}}. {{post.title}}</h5>
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