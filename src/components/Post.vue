<template>
  <div>
    <p>{{post.number}}</p>
    <h5>{{post.title}}</h5>
    <p>{{post.content}}</p>
    <p>{{post.date}}</p>
  </div>
</template>

<script>

export default {
  name: "Post",
  props: {
    post: Array,
  },
}
</script>

<style scoped>

</style>