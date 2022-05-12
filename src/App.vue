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
