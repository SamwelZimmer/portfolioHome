import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, getDoc, doc, query, limit, setDoc, orderBy, startAt } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADIQedyLqqvQk6R7f9LpTZZjOpnpF94aA",
    authDomain: "personal-site-9c7e7.firebaseapp.com",
    projectId: "personal-site-9c7e7",
    storageBucket: "personal-site-9c7e7.appspot.com",
    messagingSenderId: "399920177967",
    appId: "1:399920177967:web:c4351948940ef363af37da",
    measurementId: "G-VXFM0FDBDX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Initialisation can only happen once, this stop re-firing
function createFirebaseApp(config) {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export { firebaseApp, getAnalytics, logEvent };

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';


//* FUNCTIONS *//
export const getRecentProjects = async (n=5) => {
  const projectCollection = collection(firestore, "projects");

  // Order by datetime in descending order and limit the results to 5
  const recentProjectsQuery = query(projectCollection, orderBy("datetime", "desc"), limit(n));

  const querySnapshot = await getDocs(recentProjectsQuery);

  const projects = querySnapshot.docs.map(doc => {
    const data = doc.data();
    
    return { 
      id: doc.id, 
      ...data,
      datetime: data.datetime.toDate(),
    }
  });

  return projects;
}


export const getProject = async (id) => {
    const projectDoc = doc(firestore, "projects", id);
    const projectSnapshot = await getDoc(projectDoc);
  
    if (projectSnapshot.exists()) {
      const data = projectSnapshot.data();
      
      return {
        id: projectSnapshot.id,
        ...data,
        datetime: data.datetime?.toDate() || "" // Convert datetime to Date object if it exists
      }
    } else {
      console.log(`No project found with id: ${id}`);
      return null;
    }
};

export const getAllPlaygroundItems = async () => {

    const querySnapshot = await getDocs(collection(firestore, "playground"));
      
    const items = querySnapshot.docs.map(doc => {
  
      const data = doc.data();
      
      return { 
        id: doc.id, 
        ...data,
      }
    });
  
    return items;
};