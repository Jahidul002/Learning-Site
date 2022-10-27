import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIN = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const UpdtUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = { user, setUser, creatUser, signIN, googleLogIn, user, LogOut, loading, UpdtUserProfile }
    return (
        < div >
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div >
    );
};

export default UserContext;