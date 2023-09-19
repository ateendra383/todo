import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

//your web app fire base configration

const firebaseConfig = {
    apiKey: "AIzaSyAcNhzDiuD76xTZob2WwMBEhOVfioTkyQg",
    authDomain: "to-do-13990.firebaseapp.com",
    projectId: "to-do-13990",
    storageBucket: "to-do-13990.appspot.com",
    messagingSenderId: "259818020880",
    appId: "1:259818020880:web:11ceffa7670874e8cbea95"
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};