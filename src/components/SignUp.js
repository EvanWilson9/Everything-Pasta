import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase-config';

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [user, setUser] = useState({});

  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })
  }, [])
 
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');

  const signup = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      console.log(user);

      emailField.value = "";
      passwordField.value = "";

    }
    catch(err){
      console.log(err.message);
    }
  }

  // const logout = async ()=>{  
  //   await signOut(auth);  
  // }  

  return(
    <section className='signup-section'>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label>Email:</label>
          <input required id="email" onChange={(e)=>{
            setUserEmail(e.target.value);
          }}/>
        </div>
        <div>
          <label>Password:</label>
          <input required id="password" minLength={6} onChange={(e)=>{
            setUserPassword(e.target.value);
          }}/>
        </div>
        <div>
          <button onClick={signup} type="submit" id="signup-submit-btn">Submit</button>
          {/* <button onClick={logout}>Sign Out</button> */}
          <div>
            <div>User that is logged in:</div>
            {user?.email}
          </div>
        </div>
      </form>
    </section>
  )
}

export default SignUp;