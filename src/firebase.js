import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcAlL_yosop84X-ZEfK5V2L-0BRFuIyis",
    authDomain: "privacy-5d10f.firebaseapp.com",
    projectId: "privacy-5d10f",
    storageBucket: "privacy-5d10f.firebasestorage.app",
    messagingSenderId: "453026879416",
    appId: "1:453026879416:web:84e815dd75a932f9e7614d",
    measurementId: "G-9XER7R60BM"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
