importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyA2OWR4P5nY2wwD2ojFvm2FITAkfZIQjiI",
    authDomain: "plapppush.firebaseapp.com",
    databaseURL: "https://plapppush.firebaseio.com",
    projectId: "plapppush",
    storageBucket: "plapppush.appspot.com",
    messagingSenderId: "174229438306",
    appId: "1:174229438306:web:89e6469c52607f8c90f63b",
    measurementId: "G-7R4FTRRSTX"
});
const messaging = firebase.messaging();
