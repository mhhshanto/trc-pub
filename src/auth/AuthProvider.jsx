import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import auth from "../firebase.config";
import { useEffect } from "react";

export const ContextProvider = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user)

 
    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
        
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=> {
          const unSubsCriber = onAuthStateChanged(auth, currentUser=> {
               setUser(currentUser);
               setLoading(false);
          });
         
          return()=>{
            return unSubsCriber();
          }
          
    }, [])


const authInfo = {
      createUser,
      signInUser,
      loading,
      user,
      logOutUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;