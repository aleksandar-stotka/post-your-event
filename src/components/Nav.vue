<template>
  <nav>
    <ul>
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
      <li><router-link to="/eventList">HOME</router-link></li>
      <li>about page</li>
    </ul>
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

<style>
nav {
  width: 100%;
}
ul {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;

  margin: 2em;
  letter-spacing: 1px;
  text-transform: uppercase;
}
a {
}
</style>
