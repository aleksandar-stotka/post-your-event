<template>
  <div class="content">
    <Nav />
    <router-view> </router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap");

/* variables */
:root {
  --primary: #4f515a;
  --secondary: #ebebeb;
  --warning: #da0f41;
}

/* base styles  */
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
