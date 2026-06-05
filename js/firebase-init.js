// This file now uses the global Firebase objects from CDN
// No imports needed – Firebase will be available via the `firebase` global

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAupee5VRVJIGhvW95HnDSumB-f_k7kWzU",
  authDomain: "curepad-rx.firebaseapp.com",
  projectId: "curepad-rx",
  storageBucket: "curepad-rx.firebasestorage.app",
  messagingSenderId: "986173283901",
  appId: "1:986173283901:web:1cd6c97c0d3908a5825454"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export services (for use in other scripts)
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Make them globally available
window.auth = auth;
window.db = db;
window.googleProvider = googleProvider;