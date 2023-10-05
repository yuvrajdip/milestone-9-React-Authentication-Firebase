import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {

  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //* reset error
    setRegisterError('')
    //* reset success
    setSuccess('')

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    }
    else if (! /[A-Z]/.test(password)) {
      setRegisterError('You password should have an uppercase')
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        // result.user
        console.log('success')
        setSuccess('User Created Successfully');
      })
      .catch(error => {
        console.error('fail');
        setRegisterError(error.message);
      })

    console.log(email, password)
  }

  return (
    <div className='mx-auto'>
      <form className='text-center' onSubmit={handleFormSubmit}>
        <h2 className='text-3xl mb-4'>Please Register</h2>
        <input className='mb-4 p-4 w-2/6 h-8 rounded-md' type="email" name="email" id="" placeholder='Email' required />
        <br />
        <div className="relative">
          <input className='mb-4 p-4 w-2/6 h-8 rounded-md' type={ showPassword? `text` : `password`} name="password" id="" placeholder='Password' required />
          <span className="absolute right-[34%] bottom-4"><button style={{fontSize:'20px', marginRight: '10px'}} onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye>:<AiFillEyeInvisible/>}</button></span>
        </div>
        <br />
        <input className='px-6 py-4 bg-pink-400 text-white w-2/6 rounded-md hover:cursor-pointer' type="submit" name="submit" id="" required />
      </form>

      {registerError && <p className="text-red-600">{registerError}</p>}

      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default Register;