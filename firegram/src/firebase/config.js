import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();

// Exporting them to be used in other files
export { projectfirestore, projectstorage };
