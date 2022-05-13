<template>
  <nav v-if="user">
    <div>
      <h3>Hey there... {{ user.displayName }}</h3>
    </div>
    <p class="email">Currently logged in as {{ user.email }}</p>
    <button class="btn" @click="handleClick">Logout</button>
    <li>
      <div v-if="user">
        <router-link :to="{ name: 'CreatePlayList' }"
          >Create playList</router-link
        >
      </div>
    </li>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "../composables/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logout");
      }
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  gap: 2em;
}
h3 {
  color: azure;
}

nav p.email {
  font-size: 0.9em;
  color: rgb(182, 22, 22);
}
</style>
