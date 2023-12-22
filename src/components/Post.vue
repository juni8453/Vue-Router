<template>
  <div>
    <h5>{{posts[$route.params.postId].number + 1}}. {{posts[$route.params.postId].title}}</h5>
    <p>{{posts[$route.params.postId].content}}</p>
    <p>{{posts[$route.params.postId].date}}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {}
  },
  props: {
    posts: Array,
  },
}
</script>

<style scoped>

</style>