<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create new Event</h4>
    <input type="text" required placeholder="Event title" v-model="title" />
    <textarea
      required
      placeholder="event description.."
      v-model="description"
    ></textarea>
    <label for="">Upload playlist cover image</label>
    <input type="file" />
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const description = ref("");

    const handleSubmit = () => {
      console.log(title.value, description.value);
    };

    return { title, description, handleSubmit };
  },
};
</script>

<style>
a {
  text-decoration: none;
}

/* buttons */
button,
.btn {
  background: var(--secondary);
  border-radius: 8px;
  border: 0;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
}
button:hover,
.btn:hover {
  background: var(--primary);
  color: white;
}
button:disabled {
  opacity: 0.5;
  color: var(--primary);
  background: var(--secondary);
  cursor: not-allowed;
}

/* forms */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  border: 1px solid var(--secondary);
  background: white;
}
input,
textarea {
  border: 0;
  border-bottom: 1px solid var(--secondary);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}

/* error text */
.error {
  color: var(--warning);
  font-size: 14px;
  margin: 16px 0;
}
</style>
