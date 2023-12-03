import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import SignUp, { TopHeader } from './components/SignUp';
import Blog from './components/Blog';
import {
  Routes,
  Route,
} from "react-router-dom";

function Page() {

  return (
      <div id="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </div>
  );
}
 
function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Page/>
    </>
  );
}

export default App;