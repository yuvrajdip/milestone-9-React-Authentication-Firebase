import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from '../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null)

  const createUser = (email , password)=> {
    return createUserWithEmailAndPassword( auth, email, password);
  }

  const signInUser = (email, password)=> {
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = ()=> {
    return signOut( auth);
  }

  //todo : observe auth state change
  useEffect(()=>{

    // todo : onAuthStateChanged 
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
      console.log('Current value of the current user', currentUser);
      setUser( currentUser );
    })

    return ()=>{
      unSubscribe();
    }
  },[])

  const authInfo = { 
    user, 
    createUser , 
    signInUser ,
    logOut
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
}

/**** 
  //* 1. Create Context  
  //* 2. set provider with value
  //* 3.
  //*  
  //*  
***/