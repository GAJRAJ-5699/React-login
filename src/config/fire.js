import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBhtlYB4ogG9Xwk5Y9QXoud9qrk19O3ASQ",
    authDomain: "internreactapp.firebaseapp.com",
    projectId: "internreactapp",
    storageBucket: "internreactapp.appspot.com",
    messagingSenderId: "222216950974",
    appId: "1:222216950974:web:bc55aec90c1082de55faef"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;