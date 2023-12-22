import { createWebHistory, createRouter } from "vue-router";
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/posts",
    component: Posts
  },
  {
    path: "/posts/:postId(\\d+)",
    component: Post
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;