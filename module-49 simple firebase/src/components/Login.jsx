import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const handleSignIn = (provider) => {
    signInWithPopup(auth,provider)
      .then(result => {
       
        const loggedInUser = result.user;
        console.log(result);
        setUser(loggedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      {
        user ? <button onClick={handleSignOut}>Sign out</button> :
          <>
            <button onClick={()=>handleSignIn(googleProvider)}>Google Login</button>
            <button onClick={()=>handleSignIn(githubProvider)}>Github Login</button>
          </>
      }
      {
        user && <div>
          <h2>User : {user.displayName}</h2>
          <p>email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;