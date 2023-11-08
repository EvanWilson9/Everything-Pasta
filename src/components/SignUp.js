import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [usePassword, setUserPassword] = useState('');

  const signup = async ()=>{
    const user = await createUserWithEmailAndPassword();
  }

  const logout = ()=>{

  }

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