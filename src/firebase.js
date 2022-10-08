import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANXOYWy5_bwkSzg6oltdf4FEwtmn3I-sY",
  authDomain: "netflix-clone-62847.firebaseapp.com",
  projectId: "netflix-clone-62847",
  storageBucket: "netflix-clone-62847.appspot.com",
  messagingSenderId: "781573191275",
  appId: "1:781573191275:web:2ebe4d1ab5aa25efefa32e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
