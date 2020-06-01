import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkbMGWJekLlVW2motmcd4jbO-s9NShWG8",
    authDomain: "books-list-ec102.firebaseapp.com",
    databaseURL: "https://books-list-ec102.firebaseio.com",
    projectId: "books-list-ec102",
    storageBucket: "books-list-ec102.appspot.com",
    messagingSenderId: "190846144412",
    appId: "1:190846144412:web:d51d7e1488189c346ec259"
};
// Initialize Firebase
export default firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
