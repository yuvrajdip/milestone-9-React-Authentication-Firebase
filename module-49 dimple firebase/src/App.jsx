import { useState } from 'react'
import './App.css'
import app from './firebase.init';
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [user , setUser]= useState(null);

  const handleLogin = ()=> {

    signInWithPopup(auth, provider)
    .then(result => {
      const user2 = result.user ;
      console.log(user2);
      setUser(user2);
    })
    .catch(error=> {
      console.log(error.message)
    })
  }

  return (
    <>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <h1>Vite + Router+ TailwindCSS+ DaisyUI + Firebase+ React</h1>
      <div className="card">
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {
        user && <>
          <div className='text-center'>
            <img src={user.photoURL} alt="" />
            <h2>display Name : {user.displayName}</h2>
            <h3>Phone Number : {user.email}</h3>
          </div>
        </>
      }
    </>
  )
}

export default App
