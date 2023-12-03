import React, { useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase-config';

function Login({setIsAuth, setUserInfo}) {

  const [user, setUser] = useState(null);

  const [loggedEmail, setLoggedEmail] = useState('');
  const [loggedPassword, setLoggedPassword] = useState('');

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

  const logout = async () => {
    await signOut(auth);
    setIsAuth(false);

  }

  let inputOne = document.querySelector('#password');
  let inputTwo = document.querySelector("#email");
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, loggedEmail, loggedPassword);

      setIsAuth(true);
      inputOne.value = "";
      inputTwo.value = "";

    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className='entire-signup-wrapper'>
      <section className='signup-section'>
        <div className='signup-container'>
          <h1 className='signup-page-btn'>Log In</h1>
          <div className='signup-form'>
            <div className='signup-input-boxes'>
              <input className='signup-input' placeholder='Email' id="email" required onChange={(e)=>{
                setLoggedEmail(e.target.value);
              }}/>
              <input className='signup-input' placeholder='Password' required id="password" onChange={(e)=>{
                setLoggedPassword(e.target.value);
              }}/>
            </div>
            <div className='signup-btns'>
              <Link to="/">
                <button className='signup-btn' id="signup-submit-btn" onClick={login}>
                  Submit
                </button>
              </Link>
              <button className='signup-btn' onClick={logout}>Sign Out</button>
            </div>
            <Link id='login-link' to='/signup'>Don't have an account?</Link>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Login;