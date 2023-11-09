import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })

  const signup = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      console.log(user);
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
      <div>
        <div>Email:</div>
        <input id="email" onChange={(e)=>{
          setUserEmail(e.target.value);
        }}/>
      </div>
      <div>
        <div>Password:</div>
        <input id="password" onChange={(e)=>{
          setUserPassword(e.target.value);
        }}/>
      </div>
      <div>
        <button onClick={signup} id="signup-submit-btn">Submit</button>
        {/* <button onClick={logout}>Sign Out</button> */}
        <div>
          <div>User: {user?.email}</div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;