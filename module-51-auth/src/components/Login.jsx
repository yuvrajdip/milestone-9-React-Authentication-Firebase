import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase.config';

const Login = () => {
  const user = auth.currentUser;

  // user !==null &&  console.log( user.displayName );

  const {signInUser, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);


    // todo: Sign In as User
    signInUser(email, password)
    .then(result=> {
      console.log(result.user)
      e.target.reset()

      navigate('/');
    })
    .catch(error=> console.log(error.message))
  }


  const handleGoogleSignIn = ()=> {
    signInWithGoogle()
    .then(result=> {
      console.log(result.user)
    })
    .catch(error=> console.log(error.message))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <form onSubmit={handleLogin} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p>New User? Please <Link to="/register" className='btn-link'>Register</Link></p>

          {/* <p>User Name : {user.displayName}</p> */}

          <p><button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;