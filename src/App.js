import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import CreatePost from './components/CreatePost';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import Login from './components/Login';
import Recipes from './components/Recipes'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <div id="container">
        <nav>
          <div>
            <img className='title' alt="" src="/images/everything-pasta-logo.png" />
          </div>
          <div className='navbar-links'>
            <Link to="/" id="link">Home</Link>
            <Link id="link" to="/blog">Blog</Link>
            <Link id="link" to="/recipes">Recipes</Link>
            {!isAuth && <Link to="/signup">
              <button class="log-in-btn">Sign Up</button>
            </Link>}
            {isAuth && <Link to='/signup'><button className='signout-btn' onClick={async () => {
              await signOut(auth);
              setIsAuth(false);
            }}>Sign Out</button></Link>}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} setUserInfo={setUserInfo} />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} setUserInfo={setUserInfo} />} />
          <Route path="/blog" element={<Blog isAuth={isAuth} />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;