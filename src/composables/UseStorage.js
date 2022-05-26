import { projectStorage } from "../firebase/config";
import { ref } from "vue";
import getUser from "@/composables/getUser";

const { user } = getUser();

const UseStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storageRef.put(file);
      url.value = await res.ref.getDownloadURL();
    } catch (e) {
      console.log(e / massage);
      error.value = e.message;
    }
  };
  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);
    try {
      await storageRef.delete();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { url, error, filePath, uploadImage, deleteImage };
};

export default UseStorage;
