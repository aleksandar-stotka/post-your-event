<template>
  <div>
    <p>{{ post.title }}</p>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],

  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 80) + "....";
    });
    return { snippet };
  },
};
</script>

<style></style>
