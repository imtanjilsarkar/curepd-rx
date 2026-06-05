// Firebase configuration (same as yours)
const firebaseConfig = {
  apiKey: "AIzaSyAupee5VRVJIGhvW95HnDSumB-f_k7kWzU",
  authDomain: "curepad-rx.firebaseapp.com",
  projectId: "curepad-rx",
  storageBucket: "curepad-rx.firebasestorage.app",
  messagingSenderId: "986173283901",
  appId: "1:986173283901:web:1cd6c97c0d3908a5825454"
};

// Initialize Firebase (using the global firebase object from CDN)
firebase.initializeApp(firebaseConfig);

// Create global references for convenience
window.auth = firebase.auth();
window.db = firebase.firestore();
window.googleProvider = new firebase.auth.GoogleAuthProvider();

// Optional: disable the infamous "pending credential" popup annoyance
window.googleProvider.setCustomParameters({ prompt: 'select_account' });