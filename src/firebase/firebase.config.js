// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyPnWiRy1ym_y4Q4FkxhNetVGQ7C_Nqo",
  authDomain: "the-chef-recipe-hunter-9e734.firebaseapp.com",
  projectId: "the-chef-recipe-hunter-9e734",
  storageBucket: "the-chef-recipe-hunter-9e734.appspot.com",
  messagingSenderId: "526465179670",
  appId: "1:526465179670:web:0fdf885ff567c3a5c41537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;