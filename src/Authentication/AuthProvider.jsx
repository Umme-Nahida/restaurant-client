/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.confic";
import useAxiosSecure from "../Hooks/useAxiosSecure";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const axiosSecure=useAxiosSecure()

  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
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
       const loggedUser = currentUser?.email || user?.email;
       console.log(currentUser)
       if(currentUser){
          axiosSecure.post('/jwt',{email:loggedUser})
          .then(res=>{
            console.log(res.data)
            if(res.data.token){
              localStorage.setItem("access-token",res.data.token)
            }else{
              localStorage.removeItem("access-token")
              
            }
          })
       }
       setLoading(false)
   })

   return ()=>{
     unSubscribe()
   }

  },[axiosSecure,user?.email])

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