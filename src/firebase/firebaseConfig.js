import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3p_WAs9QUUhO16prYPk8_Z6GqzgiKvJI",
  authDomain: "recipesharingplatform-food.firebaseapp.com",
  databaseURL: "https://recipesharingplatform-food-default-rtdb.firebaseio.com",
  projectId: "recipesharingplatform-food",
  storageBucket: "recipesharingplatform-food.firebasestorage.app",
  messagingSenderId: "204745502425",
  appId: "1:204745502425:web:b59f7c1b59f7d7d49298c8",
  measurementId: "G-HMHHDX1BF4",
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

export default app;