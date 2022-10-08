import firebase from 'firebase';

var firebaseConfig = {
        apiKey: "AIzaSyB_u_YGf5iem4ezMZHglaWzuN4Cd8ju9uU",
        authDomain: "team-voting-app-ef2af.firebaseapp.com",
        databaseURL: "https://team-voting-app-ef2af-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-ef2af",
        storageBucket: "team-voting-app-ef2af.appspot.com",
        messagingSenderId: "566010504116",
        appId: "1:566010504116:web:be75ef0ea19e99e973c8e1"
      };

firebase.initializeApp(firebaseConfig);

export default firebase.database();