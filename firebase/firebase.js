import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoa-AzN4LavMBwuzOt7HdpgpK1iqGSpc4",
  authDomain: "sneakace-8863f.firebaseapp.com",
  projectId: "sneakace-8863f",
  storageBucket: "sneakace-8863f.appspot.com",
  messagingSenderId: "698982348199",
  appId: "1:698982348199:web:7b9639d615cc1b6734f282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
