import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config';

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const signup = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      console.log(user);
    }
    catch(err){
      console.log(err.message);
    }
  }


  // const logout = ()=>{

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
        <br/><br/>
        <div>User: {}</div>
      </div>
    </section>
  )
}

export default SignUp;