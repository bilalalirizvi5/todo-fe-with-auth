// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-rTD3e4cl11mrIjzk4O5WputgCQ1xZI",
  authDomain: "taskmanagement1211.firebaseapp.com",
  projectId: "taskmanagement1211",
  storageBucket: "taskmanagement1211.appspot.com",
  messagingSenderId: "921820830515",
  appId: "1:921820830515:web:3d5e3f0920dcdd6964fc46",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadImage = async (file) => {
  const r = ref(storage, `images/${localStorage.getItem("userId")}`);
  await uploadBytes(r, file);
  return await getDownloadURL(r);
};

export { uploadImage };
