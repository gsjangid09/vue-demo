import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home/Dashboard.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import User from '../components/user/User.vue'
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
  {
    path: "/sign-up",
    name: "Register",
    component: Register,
  },
  {
    path: "/users",
    name: "Users",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  hash: false,
  routes,
});

export default router;