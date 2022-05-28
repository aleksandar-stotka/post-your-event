<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="event" class="playlist-details">
      <div class="playlist-info">
        <div class="cover">
          <img :src="event.coverUrl" />
        </div>
        <h2>{{ event.title }}</h2>
        <p class="username">Created by {{ event.userName }}</p>
        <p class="description">{{ event.description }}</p>
        <button @click="handleDelete" v-if="ownership">Delete</button>
      </div>
      <div class="song-list">
        <p>list here</p>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "../../composables/getDocument";
import getUser from "../../composables/getUser";
import { computed } from "vue";
import useDocuments from "@/composables/useDocuments";
import UseStorage from "../../composables/UseStorage";
import { useRouter } from "vue-router";
import router from "../../router";
export default {
  props: ["id"],
  setup(props) {
    const { error, document: event } = getDocument("playlists", props.id);
    const { user } = getUser();
    const { deleteDocuments } = useDocuments("playlists", props.id);
    const { deleteImage } = UseStorage();

    ///////////////////////////////////////
    const handleDelete = async () => {
      await deleteImage(event.value.filePath);

      await deleteDocuments();
      router.push({ name: "Chatroom" });
    };

    ////// only if we have value for the event

    const ownership = computed(() => {
      return event.value && user.value && user.value.uid == event.value.userId;
      ///if event have value will be true
      //must pass three coditional because ownership to be true
    });

    return { error, event, ownership, handleDelete };
  },
};
</script>

<style scoped>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 200%;
  max-height: 200%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>
