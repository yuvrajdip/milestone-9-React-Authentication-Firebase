import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {

  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;

    console.log( name, email , password, checked);

    //* reset error
    setRegisterError('')
    //* reset success
    setSuccess('')



    //todo: Validations 
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    }
    else if (! /[A-Z]/.test(password)) {
      setRegisterError('You password should have an uppercase')
      return;
    }
    else if (!checked) {
      console.log('Please Accept Terms and Conditions');
      setRegisterError('Please Accept Terms and Conditions');
      return;
    }

    //todo: createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        // result.user
        console.log('success')
        setSuccess('User Created Successfully');

        //todo: Update Profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(()=>console.log('Profile Updated'))
        .catch()

        //todo: Email Verification
        sendEmailVerification(result.user)
          .then(() => alert('Verification email Sent'));
      })
      .catch(error => {
        console.log('fail');
        setRegisterError(error.message);
      })

    console.log(email, password)
  }

  return (
    <div className='mx-auto'>

      <form className='text-center' onSubmit={handleFormSubmit}>

        <h2 className='text-3xl mb-4'>Please Register</h2>

        {/* //* User Name Field */}
        <input
          className='mb-4 p-4 w-2/6 h-8 rounded-md'
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
          required
        />

        <br />

        {/* //* User Email */}
        <input
          className='mb-4 p-4 w-2/6 h-8 rounded-md'
          type="email"
          name="email"
          id=""
          placeholder='Email'
          required
        />

        <br />

        <div className="relative">
          <input
            className='mb-4 p-4 w-2/6 h-8 rounded-md'
            type={showPassword ? `text` : `password`}
            name="password"
            id=""
            placeholder='Password'
            required
          />

          <span
            className="absolute right-[34%] bottom-4"
          >
            <button
              type="button"
              style={{ fontSize: '20px', marginRight: '10px' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible />}
            </button>
          </span>
        </div>
        <br />

        <input type="checkbox" name="checkbox" id="" />
        <label htmlFor="">  I accept terms and Conditions</label>

        <br />
        <br />

        <input className='px-6 py-4 bg-pink-400 text-white w-2/6 rounded-md hover:cursor-pointer' type="submit" name="submit" id="" required value="Register"/>

        <p className="my-4">Already have an account. Please <Link to="/login" className="text-blue-600">Login</Link></p>
      </form>

      {registerError && <p className="text-red-600">{registerError}</p>}

      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default Register;