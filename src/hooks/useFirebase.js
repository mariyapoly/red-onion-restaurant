import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaion from "../Firebase/firebase.init";

initializeAuthenticaion();

const useFirebase = () => {


    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();

    const signInUsignGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    };


    const signInUsingGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    };

    const signInUsignFaceBook = () => {

        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    };

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return unSubscribed;
    }, [])

    return {
        user,
        error,
        signInUsignGoogle,
        signInUsingGithub,
        signInUsignFaceBook,
        createNewUser,
        signInUser,
        logOut
    }

}


export default useFirebase;