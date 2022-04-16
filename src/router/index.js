import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home/Dashboard.vue";
import Login from "../components/auth/Login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  hash: false,
  routes,
});

export default router;