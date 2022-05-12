<template>
  <div class="">
    <div v-if="hideNav" class="nav">
      <Navbar />
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

export default {
  props: ["playlists"],
  components: {
    Navbar,

    ChatWindow,
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

<style scoped>
.container {
  width: 90rem;
  display: flex;
  margin: 2em auto;
}
.nav {
  width: 40rem;
  background: rgb(46, 207, 14);
  margin: auto;
  font-size: 2rem;
}
</style>
