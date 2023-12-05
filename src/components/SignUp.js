import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase-config';
import { Link, useNavigate } from 'react-router-dom';

function SignUp({setIsAuth, setUserInfo}) {

  const [user, setUser] = useState(null);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserInfo(currentUser.email);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    }
  }, [])

  let inputOne = document.querySelector('#password');
  let inputTwo = document.querySelector("#email");
  const navigate = useNavigate()

  const signup = (e) => {

    try {
      e.preventDefault();


      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {

          navigate('/');
          setIsAuth(true);
          inputOne.value = "";
          inputTwo.value = "";
        })
    }
    catch (err) {
      console.log(err.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
    setIsAuth(false);

  }

  const signUpBtn = document.querySelector('.signup-page-btn');
  const logInBtn = document.querySelector('.login-page-btn');

  return (
    <div className='entire-signup-wrapper'>
      <section className='signup-section'>
        <div className='signup-container'>
            <h1 className='signup-page-btn'>Sign Up</h1>
            {/* <h1 onClick={() => {
              signUpBtn.style.color = 'rgba(211, 211, 211, 0.363)';
              logInBtn.style.color = "white";
            }} className='login-page-btn'>Log In</h1> */}
          <div className='signup-form'>
            <div className='signup-input-boxes'>
              <input className='signup-input' placeholder='Email' id="email" required onChange={(e) => {
                setUserEmail(e.target.value);
              }} />
              <input className='signup-input' placeholder='Password' required id="password" minLength={6} onChange={(e) => {
                setUserPassword(e.target.value);
              }} />
            </div>
            <div className='signup-btns'>
              <Link to="/">
                <button className='submit-btn' onClick={signup} id="signup-submit-btn">
                  Sign Up
                </button>
              </Link>
            </div>
            <Link id='login-link' to='/login'>Already have an account?</Link>
          </div>
        </div>
      </section>
    </div>

  );
}

export default SignUp;