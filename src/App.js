import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
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
          </Routes>
      </div>
  );
}
 
function App() {
  return (
    <>
      <Page/>
    </>
  );
}

export default App;