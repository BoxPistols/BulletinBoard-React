// ./src/helpers/initializeApp.js
import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
  apiKey: "AIzaSyDaclIZ3VSx0XHNwtdesNpfuYGLJFPFg04",
  authDomain: "bulletinboard-react.firebaseapp.com",
  databaseURL: "https://bulletinboard-react.firebaseio.com",
  projectId: "bulletinboard-react",
  storageBucket: "bulletinboard-react.appspot.com",
  messagingSenderId: "46466784979",
  appId: "1:46466784979:web:362a9062c2806a03807e26",
  measurementId: "G-DFKXV8NX0B"
})

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err)
})