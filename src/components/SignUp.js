import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase-config';
import { Link, useNavigate } from 'react-router-dom'
import TopHeader from './TopHeader';

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

  let inputOne = document.querySelectorAll('#password');
  let inputTwo = document.querySelectorAll("#email");


  // const loginForm = document.querySelector('#login-form');
  const navigate = useNavigate()
  
  const signup = (e) => {

    try {
      e.preventDefault();


      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          
          // navigate('/blog');
        })
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
      <TopHeader user={user}/>
      <section className='signup-section'>
        <div className='signup-container'>
        <h1 style={{
          color:'white'
        }}
        >Sign Up</h1>
        <div className='signup-form'>
          <div>
            <label>Email: </label>
            <input className='signup-input' id="email" required onChange={(e) => {
              setUserEmail(e.target.value);
            }} />
          </div>
          <div>
            <label>Password: </label>
            <input className='signup-input' required id="password" minLength={6} onChange={(e) => {
              setUserPassword(e.target.value);
            }} />
          </div>
          <div className='signup-btns'>
            <Link to="/">
              <button className='signup-btn' onClick={signup} id="signup-submit-btn">
                Submit
              </button>
            </Link>
            <button className='signup-btn' onClick={logout}>Sign Out</button>
          </div>
          <br />
        </div>
        </div>
      </section>
    </div>

  );
}

export { userExport };
export default SignUp;