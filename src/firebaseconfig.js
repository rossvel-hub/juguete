import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD2tGpIji_IwYT4KNuU-D3VqwIAkmACJbM",
    authDomain: "juguete-df0da.firebaseapp.com",
    projectId: "juguete-df0da",
    storageBucket: "juguete-df0da.appspot.com",
    messagingSenderId: "482688600696",
    appId: "1:482688600696:web:12c6cf2cd4b15f631f3b8d"
});

//provedor para authenticar x email y password
export const auth = firebase.auth();

//En caso de utilizar mas provedores aqui se en listarian
//Esto es para user el provedor de google para authenticar
export const authWithGoogle = new firebase.auth.GoogleAuthProvider();

export const firebaseDB = getFirestore(app);

export default app;

