import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDZ7VPKK60RHtyZZMcenbcC_TsiFJhT8q0',
    authDomain: "blog-daf89.firebaseapp.com",
    projectId: "blog-daf89",
    storageBucket: "blog-daf89.appspot.com",
    messagingSenderId: "444624148532",
    appId: "1:444624148532:web:3132a671ce8b3dd68dd261"
  };
  
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)

  export const auth = getAuth(app)
  export const provider = new GoogleAuthProvider() 