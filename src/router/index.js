import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome";
import Chatroom from "../views/Chatroom.vue";
import Home from "../pages/Home.vue";
import Event from "../components/event/Event.vue";
import Register from "../components/event/Register.vue";
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("cuuren user in auth guard", user);
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/wel",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/event:id",
    name: "Event",
    component: Event,
  },
  {
    path: "/register",
    name: "regist",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
