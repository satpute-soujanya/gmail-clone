import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyB7bx9rwWg4bsWyCld0ywQI7PcMV-VFs2k',
  authDomain: 'clone-daee7.firebaseapp.com',
  projectId: 'clone-daee7',
  storageBucket: 'clone-daee7.appspot.com',
  messagingSenderId: '143605857872',
  appId: '1:143605857872:web:36927403e485c951d7db55',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }
