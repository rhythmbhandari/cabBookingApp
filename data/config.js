import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgkRtHMnIuyfcBDpdNVtOgicAALjKY92E",
    authDomain: "lab4-react-native.firebaseapp.com",
    projectId: "lab4-react-native",
    storageBucket: "lab4-react-native.appspot.com",
    messagingSenderId: "464620274002",
    appId: "1:464620274002:web:5cdecb4c14b97752ee3a8b"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
