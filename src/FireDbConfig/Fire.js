import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDs2FRDJ0_A9KIhqqoqolbKYnyuSBfcp8g",
  authDomain: "community-housing-c73c2.firebaseapp.com",
  databaseURL: "https://community-housing-c73c2.firebaseio.com",
  projectId: "community-housing-c73c2",
  storageBucket: "community-housing-c73c2.appspot.com",
  messagingSenderId: "895849898980",
  appId: "1:895849898980:web:ede45be1cbcb38f9fe5df1",
  measurementId: "G-KX5LQJ6S79"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
