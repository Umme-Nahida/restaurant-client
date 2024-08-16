/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.confic";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }


  // sign in with google
  const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser);
       console.log(currentUser)
       setLoading(false)
   })

   return ()=>{
     unSubscribe()
   }

  },[])

  const authInfo = {
    logOut,
    user,
    loading,
    createUser,
    loginUser,
    updateUserProfile,
    googleSignIn
  }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;