<template>
  <div class="">
    <div v-if="hideNav" class="nav">
      <Navbar />
      <EventList />
    </div>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow.vue";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import EventList from "../pages/EventList.vue";

export default {
  props: ["playlists"],
  components: {
    Navbar,
    ChatWindow,
    EventList,
  },
  setup() {
    const hideNav = ref(false);
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
    setTimeout(() => {
      hideNav.value = true;
    }, 2000);

    const posts = ref([
      {
        title: "welcome to the blog",
        body:
          "lorem ispum kdkdkkkd evebhi, jdjdjjjwkwkkwkwkke3jj3j3jj3jekklooaoaooaoaommcmei, jsjjjsjsjsjsjsj",
        id: 1,
      },
      { title: "welcome to top css tips", body: "lorem two", id: 2 },
    ]);

    return { hideNav, posts };
  },
};
</script>

<style scoped></style>
