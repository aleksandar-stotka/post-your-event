import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome";
import Chatroom from "../views/Chatroom.vue";
import Home from "../pages/Home.vue";
import Event from "../components/event/Event.vue";
import Register from "../components/event/Register.vue";
import { projectAuth } from "../firebase/config";
import CreateEventList from "@/views/eventList/CreateEventList";
import EventList from "@/pages/EventList";
import ListView from "@/components/ListView";
import PlayListDetails from "@/views/eventList/PlayListDetails";

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
    path: "/welcome",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
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
  {
    path: "/eventlist/create",
    name: "CreatePlayList",
    component: CreateEventList,
    beforeEnter: requireAuth,
  },
  {
    path: "/eventList",
    name: "create",
    component: EventList,
  },
  {
    path: "/listView",
    name: "listview",
    component: ListView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: PlayListDetails,
    beforeEnter: requireAuth,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
