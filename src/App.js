import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Page() {
  return (
      <div id="container">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            />
            <Route
              exact
              path="/signup"
              element={<SignUp/>}
            />
          </Routes>
        </Router>
        <Home/>
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