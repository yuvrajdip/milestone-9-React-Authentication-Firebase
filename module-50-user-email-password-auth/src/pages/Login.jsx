import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.config';
import {Link} from "react-router-dom"

const Login = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log( email, password)

    //*reset registerError 
    setRegisterError('')
    //*reset register
    setSuccess('')

    //* validation kora hoinai

    //todo: signInWithEmailAndPassword
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        
        // todo: User Registration valid or not
        result.user.emailVerified ? setSuccess('Logged in Successfully') : alert('Please Verify your email address')

        e.target.email.value=''
        e.target.password.value=''
      })
      .catch(error => {
        console.log(error.message)
        setRegisterError(error.message)
      })
  }


  const handleForgetPassword = ()=> {
    const email = emailRef.current.value;
    console.log(email)
    
    if(!email){
      console.log('Please provide a valid email', email);
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log('please write a valid email')
      return;
    }

    sendPasswordResetEmail( auth, email)
    .then(()=>{
      alert('Please check your email')
    })
    .catch(error=>{
      console.log(error.message)
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/*//* Submitting the login form  */}
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  name='email' 
                  placeholder="email" 
                  className="input input-bordered" 
                  required
                  ref={emailRef} 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" onClick={()=>handleForgetPassword()} className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {registerError && <p className="text-red-600">{registerError}</p>}

            {success && <p className="text-green-500">{success}</p>}

            <p>New to this website? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;