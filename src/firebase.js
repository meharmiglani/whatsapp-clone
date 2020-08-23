import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC2zM8NnIt60sTkoAxFdv2N0nO3yeL7PVM',
  authDomain: 'whatsappclone-a97c0.firebaseapp.com',
  databaseURL: 'https://whatsappclone-a97c0.firebaseio.com',
  projectId: 'whatsappclone-a97c0',
  storageBucket: 'whatsappclone-a97c0.appspot.com',
  messagingSenderId: '1030421056158',
  appId: '1:1030421056158:web:6b08639223db34df22098f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
