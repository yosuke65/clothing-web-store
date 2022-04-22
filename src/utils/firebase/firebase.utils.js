import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider

} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADnREdB7xaInOwVOVJmLoB_Bmy9hu4aho",
    authDomain: "crwn-clothing-db-af63b.firebaseapp.com",
    projectId: "crwn-clothing-db-af63b",
    storageBucket: "crwn-clothing-db-af63b.appspot.com",
    messagingSenderId: "93828212122",
    appId: "1:93828212122:web:36bf68f7f339fffd630623"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const  {displayName, email} = userAuth
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (e) {
            console.log('error creating the user', e.message);
        }
    }

    return userDocRef;
}