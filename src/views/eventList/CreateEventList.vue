<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h4>Create new Event</h4>
      <input type="text" required placeholder="Event title" v-model="title" />
      <textarea
        required
        placeholder="event description.."
        v-model="description"
      ></textarea>
      <label for="">Upload playlist cover image</label>
      <input type="file" @change="handleChange" />
      <div class="error">{{ fileError }}</div>
      <button @click="handleCreate">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import UseStorage from "@/composables/UseStorage";
import useCollection from "../../composables/useCollection";
import getUser from "../../composables/getUser";
import { timestamp } from "../../firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { filePath, url, uploadImage } = UseStorage();
    const { error, addDoc } = useCollection("playlists");
    const { user } = getUser();
    const router = useRouter();
    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        const res = await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        }); //epresent object document there we want to this collection
        if (!error.value) {
          router.push({ name: "details", params: { id: res.id } });
        }
      }
    };

    const newRoute = () => {};
    ///allowed file types
    const types = ["image/png", "image/jpeg"];
    const handleChange = (e) => {
      const select = e.target.files[0];
      console.log(select);
      if (select && types.includes(select.type)) {
        file.value = select;
        file.error.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg";
      }
    };
    const handleCreate = () => {
      if (select) {
        router.push("/create");
      }
    };
    return {
      title,
      description,
      handleSubmit,
      handleChange,
      fileError,
      handleCreate,
    };
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
