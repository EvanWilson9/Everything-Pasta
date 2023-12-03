import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase-config';
import { Link, useNavigate } from 'react-router-dom'

let userExport;

function SignUp() {

  const [user, setUser] = useState(null);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // userExport = user ? user.email : null;

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

  let inputOne = document.querySelector('#password');
  let inputTwo = document.querySelector("#email");
  const navigate = useNavigate()

  const signup = (e) => {

    try {
      e.preventDefault();


      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {

          // navigate('/blog');
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

  const signUpBtn = document.querySelector('.signup-page-btn');
  const logInBtn = document.querySelector('.login-page-btn');

  return (
    <div className='entire-signup-wrapper'>
      <TopHeader user={user}/>
      <section className='signup-section'>
        <div className='signup-container'>
          <div className='signup-titles'>
            <h1 onClick={() => {
              signUpBtn.style.color = 'white';
              logInBtn.style.color = "rgba(211, 211, 211, 0.363)";
            }} className='signup-page-btn'>Sign Up</h1>
            <h1 style={{
              color: 'white'
            }}>/</h1>
            <h1 onClick={() => {
              signUpBtn.style.color = 'rgba(211, 211, 211, 0.363)';
              logInBtn.style.color = "white";
            }} className='login-page-btn'>Log In</h1>
          </div>
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

export function TopHeader({user}) {
  return (
    <div id="top-header-container">
      <div id="left-side">
        <img className='title' alt="" src="/images/everything-pasta-logo.png"/>
      </div>
      <div class="right-side">
          <div class="navbar-links">
            <ul>
              <li>
                <Link to="/" id="link">
                  <p id="home-txt">Home</p>
                </Link>
              </li>
              <li>
              <Link id="link" to="/blog">
                <p>Blog</p>
              </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button class="log-in-btn">Sign Up / Log In</button>
                </Link>
              </li>
              <li>{user? user.email : 'Guest'}</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

// export { userExport };
export default SignUp;