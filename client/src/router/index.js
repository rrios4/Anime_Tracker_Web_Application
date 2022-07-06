import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Anime from "../views/Anime.vue";
import MyList from "../views/authentication/MyList.vue";
import Help from "../views/Help.vue";
import Login from "../views/authentication/Login.vue";
import Profile from "../views/authentication/Profile.vue";
import Register from "../views/authentication/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    //Route for anime
    path: "/anime",
    name: "Anime",
    component: Anime,
  },
  {
    //Route for mylist
    path: "/mylist",
    name: "Mylist",
    component: MyList,
  },
  {
    //Route for help
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    // Route for login
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    //Route for Profile Page
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    //Route for register view
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
