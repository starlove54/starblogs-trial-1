// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'starblogs-trial.firebaseapp.com',
  projectId: 'starblogs-trial',
  storageBucket: 'starblogs-trial.appspot.com',
  messagingSenderId: '286124611174',
  appId: '1:286124611174:web:b257cde161cee008833fa7',
  measurementId: 'G-D57S2GLGXP',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
