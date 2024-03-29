import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfXdCT5Pz0LM2FQF7IbUN2NB2JARyQxzQ",
  authDomain: "cyber-camp.firebaseapp.com",
  databaseURL: "https://cyber-camp-default-rtdb.firebaseio.com",
  projectId: "cyber-camp",
  storageBucket: "cyber-camp.appspot.com",
  messagingSenderId: "370146666905",
  appId: "1:370146666905:web:c741281f0cb728a071cb08",
  measurementId: "G-TJV51CGT44",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error.message);
  }
};
export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error.message);
  }
};

export const onAuthStateChangedListener = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userId = user.uid;

      getLevel(userId).then((level) => {
        saveUserLevel(userId, level);
      });
    }
  });
};

// Level-related functions
export const saveUserLevel = (userId, level) => {
  const levelRef = ref(db, `users/${userId}/level`);
  set(levelRef, level)
    .then(() => {
      console.log("User level saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving user level:", error);
    });
};

export const getLevel = (userId) => {
  const levelRef = ref(db, `users/${userId}/level`);

  return get(levelRef).then((snapshot) => {
    const level = snapshot.val() || 1; // Set default to 1 if not found
    return level;
  });
};
