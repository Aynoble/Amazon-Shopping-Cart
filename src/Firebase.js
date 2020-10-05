import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBuyzuV_FGt6IYtUU8pRF_J1QT7biMd2uU",
    authDomain: "clone-63df1.firebaseapp.com",
    databaseURL: "https://clone-63df1.firebaseio.com",
    projectId: "clone-63df1",
    storageBucket: "clone-63df1.appspot.com",
    messagingSenderId: "284713923897",
    appId: "1:284713923897:web:a5f42dbc08608b5db1a4e8",
    measurementId: "G-VHD8B7PB31"
});


const auth = firebase.auth();


export { auth };
