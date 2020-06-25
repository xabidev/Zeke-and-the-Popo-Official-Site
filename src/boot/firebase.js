import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// leave the export, even if you don't use it
export default async ({ Vue }) => {
  const config = {
    apiKey: "AIzaSyBU0Ga6OgRZI082BrNXDuFYzayqngTXXTo",
    authDomain: "zatppcom.firebaseapp.com",
    databaseURL: "https://zatppcom.firebaseio.com",
    projectId: "zatppcom",
    storageBucket: "zatppcom.appspot.com",
    messagingSenderId: "207671530459"
  };

  firebase.initializeApp(config)

  Vue.prototype.$firebase = firebase
}
