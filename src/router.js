import { createWebHistory, createRouter } from "vue-router";
import Post from './components/Posts.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: "/posts",
    component: Post,
  },
  {
    path: "/",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;