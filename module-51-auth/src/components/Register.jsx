import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  // const [ registered, setRegistered ] = useState('');

  const authInfo = useContext(AuthContext);
 
  const {createUser} = authInfo;


  // const handleLogOut = () => {
  //   logOut()
  //   .then(()=> console.log('User LoggedOut Successfully'))
  //   .catch(error=> console.error(error.message))
  // }


  const handleRegister = e => {
    e.preventDefault();
    console.log(' from register');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password, name);

    
    //todo : create user
    createUser(email, password)
    .then(result=>console.log(result.user))
    .catch(error=>{
      console.error(error.message)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
            </div>
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
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>

          <p>Have Account? Please <Link to="/login" className='btn-link'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;