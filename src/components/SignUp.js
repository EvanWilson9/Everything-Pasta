import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase-config';
import { setDoc, doc } from 'firebase/firestore';

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [loggedEmail, setLoggedEmail] = useState('');
  const [loggedPassword, setLoggedPassword] = useState('');

  const [username, setUsername] = useState('');

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const listen = onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        setUser(currentUser)
        console.log('wokring');
      } else {
        setUser(null);
        console.log('not working')
      }
    });

      return ()=>{
        listen();
      }
  }, [])
 
  const signupForm = document.querySelector('.signup-form');
  // const loginForm = document.querySelector('#login-form');

  const signup = (e)=>{

    try{
      e.preventDefault();

      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then( async (result)=>{
          const ref = doc(db, 'users', result.user.uid);
          const docRef = await setDoc(ref, {username})
            .then((re) =>{
              alert('data has been entered');
            })
        })

      signupForm.reset();

    }
    catch(err){
      console.log(err.message);
    }
  }

  const logout = async ()=>{  
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

  return(
    <section className='signup-section'>
      <h1>Sign Up</h1>
      <form className='signup-form'>
      <div>
          <label>Username: </label>
          <input required onChange={(e)=>{
            setUsername(e.target.value);
          }}/>
        </div>
      <div>
          <label>Email: </label>
          <input required onChange={(e)=>{
            setUserEmail(e.target.value);
          }}/>
        </div>
        <div>
          <label>Password: </label>
          <input required id="password" minLength={6} onChange={(e)=>{
            setUserPassword(e.target.value);
          }}/>
        </div>
        <div>
          <button onClick={signup} id="signup-submit-btn">Submit</button>
          <button onClick={logout}>Sign Out</button>
        </div>
        User: {user? user.email : "Not logged in"}
      </form>
    </section>
  )
}

 /* <br/>
      <div>
        <h1>Login</h1>
        <form id="login-form">
        <div>
          <label>Email: </label>
          <input required id="email" onChange={(e)=>{
            setLoggedEmail(e.target.value);
          }}/>
        </div>
        <div>
          <label>Password: </label>
          <input required id="email" onChange={(e)=>{
            setLoggedPassword(e.target.value);
          }}/>
        </div>
        <button onClick={login}>Submit</button>
        <div>
            <div>User that is logged in:</div>
            {user ? user.email : "Not Logged In"}
          </div>
          </form>
      </div> */

export default SignUp;