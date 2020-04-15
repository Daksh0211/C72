import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCbvojlVHKNPP23KfNARzbXBujmYB8TCv0",
  authDomain: "wily-app-b3f7c.firebaseapp.com",
  databaseURL: "https://wily-app-b3f7c.firebaseio.com",
  projectId: "wily-app-b3f7c",
  storageBucket: "wily-app-b3f7c.appspot.com",
  messagingSenderId: "432897338861",
  appId: "1:432897338861:web:a7bf97ae269b469ef4cbe4"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
