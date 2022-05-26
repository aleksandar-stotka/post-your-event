import { ref } from "vue";

import { projectFirestore } from "../firebase/config";

const useDocuments = (collection, id) => {
  const error = ref(null);
  const isPanding = ref(false);

  const docRef = projectFirestore.collection(collection).doc(id);
  ////we get collection from firestore

  const deleteDocuments = async () => {
    isPanding.value = true;
    error.value = null;
    try {
      const res = await docRef.delete();
      isPanding = false;
      return res;
    } catch (err) {
      console.log(err);
      isPanding.value = true;
    }
  };

  return { error, isPanding, deleteDocuments };
};

export default useDocuments;
