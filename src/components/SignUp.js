import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase-config';
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader';
import ContactSection from './ContactSection';

let userExport;

function SignUp() {

  const [user, setUser] = useState(null);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  userExport = user ? user.email : null;

  // const [loggedEmail, setLoggedEmail] = useState('');
  // const [loggedPassword, setLoggedPassword] = useState('');

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        console.log('wokring');
      } else {
        setUser(null);
        console.log('not working')
      }
    });

    return () => {
      listen();
    }
  }, [])

  const signupForm = document.querySelector('.signup-form');
  // const loginForm = document.querySelector('#login-form');

  const signup = (e) => {

    try {
      e.preventDefault();


      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          alert('data has been entered');
        })

      signupForm.reset();
    }
    catch (err) {
      console.log(err.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  // const login = async (e)=>{
  //   try{
  //     e.preventDefault();
  //     const user = await signInWithEmailAndPassword(auth, loggedEmail, loggedPassword);

  //     loginForm.reset();

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <div className='entire-signup-wrapper'>
      <TopHeader />
      <section className='signup-section'>
        <h1>Sign Up</h1>
        <form className='signup-form'>
          <div>
            <label>Email: </label>
            <input required onChange={(e) => {
              setUserEmail(e.target.value);
            }} />
          </div>
          <div>
            <label>Password: </label>
            <input required id="password" minLength={6} onChange={(e) => {
              setUserPassword(e.target.value);
            }} />
          </div>
          <div>
            <Link to="/">
              <button onClick={signup} id="signup-submit-btn">
                Submit
              </button>
            </Link>
            <button onClick={logout}>Sign Out</button>
          </div>
          <br />
        </form>
      </section>
      <ContactSection/>
    </div>

  );
}

export { userExport };
export default SignUp;