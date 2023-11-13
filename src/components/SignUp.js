import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

function SignUp(){

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [loggedEmail, setLoggedEmail] = useState('');
  const [loggedPassword, setLoggedPassword] = useState('');

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

  const signup = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      console.log(user);

      signupForm.reset();

    }
    catch(err){
      console.log(err.message);
    }
  }

  // const logout = async ()=>{  
  //   await signOut(auth);  
  // }  

  // const login = async ()=>{
  //   try{
  //     const user = await signInWithEmailAndPassword(auth, loggedEmail, loggedPassword);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return(
    <section className='signup-section'>
      <h1>Sign Up</h1>
      <form className='signup-form'>
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
            {user ? user.email : "Not Logged In"}
          </div>
        </div>
      </form>
      <br/>
      {/* <h1>Log In</h1>
      <form className='signup-form'>
        <div>
          <label>Email:</label>
          <input required id="email" onChange={(e)=>{
            setLoggedEmail(e.target.value);
          }}/>
        </div>
        <div>
          <label>Password:</label>
          <input required id="password" minLength={6} onChange={(e)=>{
            setLoggedPassword(e.target.value);
          }}/>
        </div>
        <div>
          <button onClick={login} type="submit" id="signup-submit-btn">Submit</button>
          {/* <button onClick={logout}>Sign Out</button> */}
          {/* <div>
            <div>User that is logged in:</div>
            {user ? user.email : "Not Logged In"}
          </div>
        </div> */}
      {/* </form> */}
    </section>
  )
}

export default SignUp;