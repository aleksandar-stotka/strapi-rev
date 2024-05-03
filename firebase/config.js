import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdCKXZ0AgOmrEuf_RMb_7Q3pvcecA2Uoo",
    authDomain: "dogs-cat-d039c.firebaseapp.com",
    projectId: "dogs-cat-d039c",
    storageBucket: "dogs-cat-d039c.appspot.com",
    messagingSenderId: "804285719711",
    appId: "1:804285719711:web:5348dd60dfcc03161ceeaa"
  };

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }