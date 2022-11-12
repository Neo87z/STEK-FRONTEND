import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyAWvU4vvnwA4Hd7lyZ-9vXiuSHEZ8J9QvU",
    authDomain: "stek-e122c.firebaseapp.com",
    databaseURL: "https://stek-e122c-default-rtdb.firebaseio.com",
    projectId: "stek-e122c",
    storageBucket: "stek-e122c.appspot.com",
    messagingSenderId: "322366797156",
    appId: "1:322366797156:web:3b59e821aafd0d033b7671",
    measurementId: "G-KFJBP0ZDRR"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;
