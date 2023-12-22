import { createWebHistory, createRouter } from "vue-router";
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'
import Home from './components/Home.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

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
    path: "/posts/:postId",
    component: Post,
    children: [ // 상대경로로 작성
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;