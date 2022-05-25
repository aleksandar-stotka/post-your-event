import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";
//this composable are not dependents of any other components
//we can reuse for

const getCollection = (collection) => {
  //real time listener for collection , and we past collection as a argument when we use this
  //comonent

  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      ///update values
      documents.value = results;
      console.log(documents);
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "cold not fetch data ";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });
  return { documents, error };
};

export default getCollection;
